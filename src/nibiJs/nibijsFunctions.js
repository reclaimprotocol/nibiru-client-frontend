import { useContext } from "react";
import { NibijsContext } from "./nibijsContext";
 
// Uncomment for mainnet
// let contractAddress = "nibi1d7ffxpewty3zd0lq39l9rxc2wtmgv8j3gsg3qf5yglzewqp84mkqlttmme";

let contractAddress = "nibi1l0yhggdxmvkcjd9a304gkel770rkyl2vy272q58seyp5sys7486spversq";
 
const NibijsFunctions = () => {
  const { nibijs, nibiAddress } = useContext(NibijsContext);
 
  let verify_proof = async (proof) => {
 
    let tx = await nibijs.wasmClient.execute(
      nibiAddress,
      contractAddress,
      {
        verify_proof: {
          proof: proof,
        },
      },
      "auto"
    );
 
    console.log(tx);
  };
 
  return {
    verify_proof
  };
};
 
export { NibijsFunctions };
 