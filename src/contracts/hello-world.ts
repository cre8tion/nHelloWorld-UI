import * as naj from "near-api-js";
import { view, wallet } from "../utils/near";

/**
 * The contract wrapped by this file.
 * (This is the contract used in https://github.com/near-examples/guest-book)
 *
 * We *could* use `process.env.REACT_APP_CONTRACT_NAME` in this file, since the
 * template started with that environment variable set to `guest-book.testnet`.
 *
 * BUT, the idea of files in `src/contracts` is that they each wrap a specific
 * contract. If the env var `REACT_APP_CONTRACT_NAME` changes, this file is
 * still a wrapper around the guest book contract.
 */
export const CONTRACT_NAME = "helloworld.crypto_overflow.testnet";

/**
 * This is a Contract object instantiated using near-api-js.
 *
 * But this does not provide any TypeScript types! Using this approach makes it
 * hard for you and your collaborators to tell what arguments you can pass to
 * `call`.
 *
 * See other exports for a fully-typed approach instead.
 */
export const Untyped = new naj.Contract(wallet.account(), CONTRACT_NAME, {
  viewMethods: ["call"],
  changeMethods: []
});

/**
 * Get Hello World Message
 * 
 * @param args.name The text of the message
 */
export async function getHelloWorld(args: {
  name: string;
}): Promise<string> {
  return view(CONTRACT_NAME, "call", args);
}
