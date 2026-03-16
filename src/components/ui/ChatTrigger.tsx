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

  const buttons = Array.from(
    widget.shadowRoot.querySelectorAll('.chat-selection-button-text')
  );
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent?.trim() === targetText) {
      const clickTarget = (buttons[i].closest('ion-button') ||
        buttons[i].closest('.chat-selection-button') ||
        buttons[i].parentElement) as HTMLElement | null;
      if (clickTarget) {
        clickTarget.click();
        return true;
      }
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

  // Select the chat option after widget renders
  const trySelect = () => selectChatOption(targetText);

  if (!trySelect()) {
    setTimeout(() => {
      if (!trySelect()) {
        setTimeout(() => trySelect(), 500);
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
