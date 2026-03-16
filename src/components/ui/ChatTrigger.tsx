'use client';

interface LeadConnector {
  chatWidget: {
    openWidget: () => void;
    closeWidget: () => void;
    isActive: () => boolean;
    isLoaded: boolean;
  };
}

declare global {
  interface Window {
    leadConnector?: LeadConnector;
  }
}

function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function selectChatOption(targetText: string): boolean {
  const widget = document.querySelector('chat-widget');
  if (!widget || !widget.shadowRoot) return false;

  // Try finding ion-button elements that contain the target text
  const ionButtons = Array.from(
    widget.shadowRoot.querySelectorAll('ion-button.chat-selection-button')
  );
  for (let i = 0; i < ionButtons.length; i++) {
    if (ionButtons[i].textContent?.includes(targetText)) {
      (ionButtons[i] as HTMLElement).click();
      return true;
    }
  }

  // Fallback: find by button text spans
  const textSpans = Array.from(
    widget.shadowRoot.querySelectorAll('.chat-selection-button-text')
  );
  for (let i = 0; i < textSpans.length; i++) {
    if (textSpans[i].textContent?.trim() === targetText) {
      // Walk up to the ion-button or clickable parent within shadow DOM
      let el = textSpans[i].parentElement;
      while (el) {
        if (el.tagName === 'ION-BUTTON' || el.tagName === 'BUTTON') {
          (el as HTMLElement).click();
          return true;
        }
        el = el.parentElement;
      }
      // Try clicking the text span container directly
      const container = textSpans[i].closest('.chat-selection-button-inner');
      if (container) {
        (container as HTMLElement).click();
        return true;
      }
      (textSpans[i] as HTMLElement).click();
      return true;
    }
  }

  // Last resort: look for any clickable element with the target text
  const allElements = Array.from(
    widget.shadowRoot.querySelectorAll('button, ion-button, [role="button"]')
  );
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].textContent?.includes(targetText)) {
      (allElements[i] as HTMLElement).click();
      return true;
    }
  }

  return false;
}

function openWidgetWithMode(targetText: string) {
  const lc = window.leadConnector;
  if (!lc?.chatWidget?.isLoaded) return;

  // Open widget if not already open
  if (!lc.chatWidget.isActive()) {
    lc.chatWidget.openWidget();
  }

  // Select the chat option with retries as widget UI renders
  const trySelect = () => selectChatOption(targetText);

  if (!trySelect()) {
    setTimeout(() => {
      if (!trySelect()) {
        setTimeout(() => {
          if (!trySelect()) {
            setTimeout(() => trySelect(), 1000);
          }
        }, 500);
      }
    }, 300);
  }
}

export default function ChatTrigger({
  children,
  className = '',
  mode = 'voice',
}: {
  children: React.ReactNode;
  className?: string;
  mode?: 'voice' | 'text';
}) {
  const handleClick = () => {
    // On mobile + voice mode, use native phone call
    if (mode === 'voice' && isMobileDevice()) {
      window.location.href = 'tel:+12155095121';
      return;
    }

    const targetText = mode === 'voice' ? 'Chat with Voice' : 'Chat with Text';
    openWidgetWithMode(targetText);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
