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

/**
 * Recursively search through shadow DOMs to find elements matching a selector
 */
function deepQueryAll(root: Document | ShadowRoot | Element, selector: string): Element[] {
  const results: Element[] = [];

  // Query direct matches in this root
  const directMatches = Array.from(
    (root as Document | ShadowRoot).querySelectorAll
      ? (root as Document | ShadowRoot).querySelectorAll(selector)
      : []
  );
  results.push(...directMatches);

  // Find all elements that might have shadow roots and recurse
  const allElements = Array.from(
    (root as Document | ShadowRoot).querySelectorAll
      ? (root as Document | ShadowRoot).querySelectorAll('*')
      : []
  );
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.shadowRoot) {
      results.push(...deepQueryAll(el.shadowRoot, selector));
    }
  }

  return results;
}

function selectChatOption(targetText: string): boolean {
  // Strategy 1: Deep search through all shadow DOMs for the selection buttons
  const chatWidget = document.querySelector('chat-widget');
  if (!chatWidget) return false;

  const roots: (ShadowRoot | Element)[] = [];
  if (chatWidget.shadowRoot) roots.push(chatWidget.shadowRoot);
  roots.push(chatWidget);

  for (let r = 0; r < roots.length; r++) {
    const root = roots[r];

    // Find ion-buttons with the target text
    const ionButtons = deepQueryAll(root as Element, 'ion-button');
    for (let i = 0; i < ionButtons.length; i++) {
      if (ionButtons[i].textContent?.includes(targetText)) {
        // Try multiple click methods
        const el = ionButtons[i] as HTMLElement;

        // Method 1: Direct click
        el.click();

        // Method 2: Composed MouseEvent (crosses shadow DOM boundaries)
        el.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          composed: true,
          cancelable: true,
          view: window,
        }));

        // Method 3: Find and click the native button inside ion-button shadow root
        if (el.shadowRoot) {
          const nativeBtn = el.shadowRoot.querySelector('button.button-native') as HTMLElement;
          if (nativeBtn) {
            nativeBtn.click();
            nativeBtn.dispatchEvent(new MouseEvent('click', {
              bubbles: true,
              composed: true,
              cancelable: true,
              view: window,
            }));
          }
        }

        return true;
      }
    }

    // Fallback: find .chat-selection-button-inner divs
    const innerDivs = deepQueryAll(root as Element, '.chat-selection-button-inner');
    for (let i = 0; i < innerDivs.length; i++) {
      if (innerDivs[i].textContent?.includes(targetText)) {
        const el = innerDivs[i] as HTMLElement;
        el.click();
        el.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          composed: true,
          cancelable: true,
          view: window,
        }));
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

  // Select the chat option with retries as widget UI renders
  const trySelect = () => selectChatOption(targetText);

  // Retry at increasing intervals - widget needs time to render selection screen
  const intervals = [100, 300, 600, 1000, 1500, 2000];
  let attempt = 0;

  const retry = () => {
    if (trySelect()) return;
    if (attempt < intervals.length) {
      setTimeout(retry, intervals[attempt]);
      attempt++;
    }
  };

  retry();
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

    const targetText = mode === 'voice' ? 'Chat with Voice' : 'Chat via Live Chat';
    openWidgetWithMode(targetText);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
