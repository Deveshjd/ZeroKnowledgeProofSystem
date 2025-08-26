
import { describe, expect, it } from "vitest";
import { Simnet } from "@clarigen/clarinet-sdk"; // Update this import if your SDK uses a different name

const simnet = new Simnet();
const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

describe("example tests", () => {
  it("ensures simnet is well initialised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  // Example read-only function test
  // it("shows an example", () => {
  //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
  //   expect(result).toBeUint(0);
  // });
});
