import { publicClient } from "../util/client";
import { getContract } from "viem";
import { ERC721ABI } from "../util/ERC271Abi";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Balance = {
  result: bigint;
  contract: string;
};

export const getServerSideProps: GetServerSideProps<{
  balance: Balance;
}> = async () => {
  const contract = getContract({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: ERC721ABI,
    publicClient,
  });

  const result = await contract.read.balanceOf([
    "0xC17114b14505367799484d908ad5513D33d97F99",
  ]);
  console.log(result);
  return {
    props: {
      balance: {
        result: result,
        contract: "0xC17114b14505367799484d908ad5513D33d97F99",
      },
    },
  };
};

export default function Viem(
  balance: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          VIEM test
          {`balance: ${balance}`}
        </p>
      </div>
    </main>
  );
}
