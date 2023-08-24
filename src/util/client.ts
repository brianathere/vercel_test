import { createPublicClient, http, webSocket } from "../viem/cjs";
import { mainnet } from "../viem/cjs/chains";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: webSocket("wss://eth-mainnet.ws.alchemyapi.io/ws/demo"),
});
