import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { CandyMachineAccount } from './candy-machine';
import { CircularProgress } from '@material-ui/core';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { useEffect, useState } from 'react';

export const CTAButton = styled(Button)`
background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
text-align: center;
color: white;
border-radius: 8px;
outline: 0;
margin:auto;
font-weight: 900;
text-decoration: none;
padding: 8px 40px;
font-size: 15px;
text-align:center;
border: none;
cursor: pointer;
text-transform: uppercase;
letter-spacing: 2px;
-webkit-transition: -webkit-box-shadow 0.3s ease;
transition: -webkit-box-shadow 0.3s ease;
transition: box-shadow 0.3s ease;
transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
`; // add your own styles here

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine?: CandyMachineAccount;
  isMinting: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  const getMintButtonContent = () => {
    if (candyMachine?.state.isSoldOut) {
      return 'SOLD OUT';
    } else if (isMinting) {
      return <CircularProgress />;
    } else if (candyMachine?.state.isPresale) {
      return 'PRESALE MINT';
    }

    return 'MINT NOW';
  };

  return (
    <CTAButton
    className="featured__launch__button"
    style={{ width: "33%", fontSize: "larger" }}
      disabled={
        candyMachine?.state.isSoldOut ||
        isMinting ||
        !candyMachine?.state.isActive
      }
      onClick={async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
          if (gatewayStatus === GatewayStatus.ACTIVE) {
            setClicked(true);
          } else {
            await requestGatewayToken();
          }
        } else {
          await onMint();
          setClicked(false);
        }
      }}
      variant="contained"
    >
      {getMintButtonContent()}
    </CTAButton>
  );
};
