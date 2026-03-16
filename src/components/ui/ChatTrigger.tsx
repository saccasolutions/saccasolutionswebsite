'use client';

export default function ChatTrigger({
  children,
  className = '',
  mode = 'voice',
}: {
  children: React.ReactNode;
  className?: string;
  mode?: 'voice' | 'text';
}) {
  const openChat = () => {
    // Step 1: Find and click the GHL chat widget bubble to open it
    const widgetBubble = document.querySelector(
      '[class*="chat-widget"] button, [class*="chat-widget"] [role="button"], .lc_text-widget-open, #chat-widget-open, [class*="widget-bubble"], [class*="chat-bubble"]'
    ) as HTMLElement | null;

    if (widgetBubble) {
      widgetBubble.click();
    }

    // Also try iframe-based widget opener
    const chatWidget = document.querySelector(
      'iframe[src*="widgets.leadconnectorhq.com"]'
    ) as HTMLIFrameElement | null;

    if (chatWidget) {
      const container = chatWidget.closest('[class*="chat"]') as HTMLElement
        || chatWidget.parentElement as HTMLElement;
      if (container) {
        const btn = container.querySelector('button, [role="button"]') as HTMLElement | null;
        if (btn) btn.click();
      }
    }

    // Step 2: After widget opens, find and click the voice option
    const selectVoiceOption = () => {
      const selector = mode === 'voice'
        ? '.chat-selection-button-text'
        : '.chat-selection-button-text';
      const targetText = mode === 'voice' ? 'Chat with Voice' : 'Chat with Text';

      // Search in main DOM
      const buttons = Array.from(document.querySelectorAll(selector));
      for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        if (btn.textContent?.trim() === targetText) {
          const clickTarget = btn.closest('ion-button, button, [role="button"]') as HTMLElement
            || btn.parentElement as HTMLElement;
          if (clickTarget) {
            clickTarget.click();
            return true;
          }
        }
      }

      // Also try broader search
      const allButtons = Array.from(document.querySelectorAll('ion-button, .chat-selection-button'));
      for (let i = 0; i < allButtons.length; i++) {
        const btn = allButtons[i];
        if (btn.textContent?.includes(targetText)) {
          (btn as HTMLElement).click();
          return true;
        }
      }

      return false;
    };

    // Try immediately, then retry with delays as widget may need time to render
    if (!selectVoiceOption()) {
      setTimeout(() => {
        if (!selectVoiceOption()) {
          setTimeout(() => selectVoiceOption(), 500);
        }
      }, 200);
    }
  };

  return (
    <button type="button" onClick={openChat} className={className}>
      {children}
    </button>
  );
}
