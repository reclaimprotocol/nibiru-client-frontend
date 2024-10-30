# Reclaim Protocol Starter Pack - Nibiru

This repository provides a **React-based frontend example** for developers to interact with the Reclaim Protocol smart contract on the **Nibiru** network. This template demonstrates how to submit and verify proofs on-chain, making it easier for developers to integrate Reclaim Protocol into their applications.

---

## Features

- **Proof Submission**: Generate proof requests and submit them on-chain.
- **Proof Verification**: Verify submitted proofs directly through the smart contract.
- **Wallet Connection**: Built-in wallet connection with `Nibiru` support.

---

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

Run this command:
```bash
git clone https://gitlab.reclaimprotocol.org/starterpacks/nibiru-client-frontend.git
cd nibiru-client-frontend
```
### 2. Install Dependencies

Run this command:
```bash
npm install
```
### 3. Code Configuration

In `src/App.tsx`, fill in the necessary Reclaim credentials and replace `TODO` comments with your application-specific data:

```javascript
const APP_ID = "YOUR_APP_ID"; // Replace with your application ID
const providerId = "YOUR_PROVIDER_ID"; // Replace with your provider ID
const APP_SECRET = "YOUR_APP_SECRET"; // Replace with your app secret
```

In `src/nibiJs/nibijsContext.js` and `src/nibiJs/nibijsFunctions.js` you can find the necessary functions and context to connect the wallet and interact with the smart contract. There you would see the line:
```javascript
// Uncomment for mainnet
```
if you procced and uncomented all of the lines in the two files you would seitch to the mainnet.

### 4. Update Contract Address

If you deployed a custom contract, update the contract address in `src/nibiJs/nibijsFunctions.js`:

```javascript
let contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
```

---

## Usage

After configuration, you can run the project locally to test the proof verification process.

### Start the Application

Run this command:
```bash
npm run start
```
1. **Connect Wallet**: Ensure your wallet is connected and set to the correct network.
2. **Request Proof**: Click the "Create Claim QR Code" button to generate a QR code for proof submission.
3. **Verify Proof**: Once the proof is received, a "Verify Proof" button appears. Click it to submit a transaction for on-chain verification.
4. **View Transaction**: After verification, a link to view the transaction on the explorer will be available.

---

## Code Overview

`src/App.tsx`

- Proof Request: Configures and initiates proof requests through Reclaim’s SDK.
- QR Code Generation: Displays a QR code for users to scan and submit proofs.
- Proof Submission: Handles on-chain submission upon proof verification.

`src/verify-proof.jsx`

- Proof Transformation: Transforms the received proof to be compatible with the smart contract.
- Verification Process: Sends a transaction to verify the proof on-chain and provides a link to the transaction on the explorer.

---

## Troubleshooting

- **Wallet Connection Issues**: Ensure that your wallet is set to the correct network that you contract is deployed on and refresh the page if the connection fails.
- **Proof Submission Fails**: Double-check your Reclaim credentials, contract address, and that the correct network is selected.