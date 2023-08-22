import { createPublicClient, http, webSocket } from "viem";
import { mainnet } from "viem/chains";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: webSocket("wss://eth-mainnet.ws.alchemyapi.io/ws/demo"),
});
