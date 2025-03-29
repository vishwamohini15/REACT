import { useEffect, useState } from 'react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { Button } from '@/components/ui/button';
export default function SolanaApp() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(0);
  const [connected, setConnected] = useState(false);

  const connection = new Connection('https://api.devnet.solana.com');

  const connectWallet = async () => {
    const provider = new PhantomWalletAdapter();
    await provider.connect();
    setWallet(provider.publicKey.toString());
    setConnected(true);
    fetchBalance(provider.publicKey);
  };

  const disconnectWallet = () => {
    setWallet(null);
    setConnected(false);
    setBalance(0);
  };

  const fetchBalance = async (publicKey) => {
    const balance = await connection.getBalance(new PublicKey(publicKey));
    setBalance(balance / LAMPORTS_PER_SOL);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Solana dApp</h1>
        {connected ? (
          <div>
            <p className="mb-2">Wallet: {wallet}</p>
            <p className="mb-4">Balance: {balance} SOL</p>
            <Button onClick={disconnectWallet}>Disconnect Wallet</Button>
          </div>
        ) : (
          <button  onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Connect Wallet</button>

        )}
      </div>
    </div>
  );
}
