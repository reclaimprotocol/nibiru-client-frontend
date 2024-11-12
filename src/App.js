import "./App.css";
import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import VerifyProof from "./VerifyProof";
import ConnectButton from "./ConnectButton";

function App() {
  const [ready, setReady] = useState(false);
  const [proof, setProof] = useState({});
  const [reclaimProofRequest, setReclaimProofRequest] = useState(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [statusUrl, setStatusUrl] = useState("");

  useEffect(() => {
    async function initializeReclaim() {
      const APP_ID = "0x6E0338a6D8594101Ea9e13840449242015d71B19"; // This is an example App Id Replace it with your App Id.
      const APP_SECRET =
        "0x1e0d6a6548b72286d747b4ac9f2ad6b07eba8ad6a99cb1191890ea3f77fae48f"; // This is an example App Secret Replace it with your App Secret.
      const PROVIDER_ID = "6d3f6753-7ee6-49ee-a545-62f1b1822ae5"; // This is GitHub Provider Id Replace it with the provider id you want to use.

      const proofRequest = await ReclaimProofRequest.init(
        APP_ID,
        APP_SECRET,
        PROVIDER_ID
      );
      setReclaimProofRequest(proofRequest);
    }

    initializeReclaim();
  }, []);

  async function generateVerificationRequest() {
    if (!reclaimProofRequest) {
      console.error("Reclaim Proof Request not initialized");
      return;
    }

    await reclaimProofRequest.addContext(
      `user's address`,
      "for acmecorp.com on 1st january"
    );

    const url = await reclaimProofRequest.getRequestUrl();
    setRequestUrl(url);
    const status = reclaimProofRequest.getStatusUrl();
    setStatusUrl(status);

    await reclaimProofRequest.startSession({
      onSuccess: async (proof) => {
        setProof(proof);
        console.log(proof);
        setReady(true);
        // Your business logic here
      },
      onFailure: (error) => {
        console.error("Verification failed", error);
        // Your business logic here to handle the error
      },
    });
  }

  return (
    <div className="App">
      <ConnectButton />
      <button onClick={() => generateVerificationRequest()}>
        Generate Verification Request
      </button>
      {requestUrl && (
        <>
          <div>
            <h2>Scan this QR code to start the verification process:</h2>
            <QRCode value={requestUrl} />
          </div>
          <div>or</div>

          <button onClick={() => window.open(requestUrl, "_blank")}>
            Open link
          </button>
        </>
      )}

      {ready && <VerifyProof proof={proof}></VerifyProof>}
    </div>
  );
}

export default App;
