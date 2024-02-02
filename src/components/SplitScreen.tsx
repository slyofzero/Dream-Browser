export function SplitScreen() {
  const chartUrl = "https://www.tradingview.com/chart/3jpiHR39/?symbol=BINANCE%3AETHUSDT";
  const otherscreen = "https://dexscreener.com/";
  return (
    <main className="flex flex-grow">
      <webview id="view" src={otherscreen} className="flex-grow" />
      <webview id="view" src={chartUrl} className="flex-grow" />
    </main>
  );
}
