import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { generateReferralCode, applyReferralCode } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';
import coinIcon from '../Images/GPU.png';

const InviteWrapper = styled(motion.div)`
  padding: 20px;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
`;

const CoinImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ReferralCode = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 18px;
  margin-right: 10px;
`;

const CopyButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const XPEarned = styled.div`
  background: #3d85c6;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 30px;
`;

const RewardList = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const RewardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RewardXP = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const RewardToken = styled.span`
  font-size: 16px;
`;

const ClaimButton = styled(motion.button)`
  background: #00c853;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const InviteButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;

const Invite = () => {
  const [referralCode, setReferralCode] = useState('');
  const { execute: generateCode, data: generatedCode } = useApi(generateReferralCode);
  const { execute: applyCode, loading, error } = useApi(applyReferralCode);

  useEffect(() => {
    generateCode();
  }, [generateCode]);

  useEffect(() => {
    if (generatedCode) {
      setReferralCode(generatedCode.referralCode);
    }
  }, [generatedCode]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    // Show a toast or some feedback that the code was copied
  };

  const handleInvite = () => {
    // Implement the invite functionality (e.g., open a share dialog)
  };

  return (
    <InviteWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo>NEUROLV</Logo>
      <CoinImage src={coinIcon} alt="Coin" />
      <Title>Invite Friends to Earn More</Title>
      <CodeContainer>
        <ReferralCode>{referralCode}</ReferralCode>
        <CopyButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyCode}
        >
          Copy code
        </CopyButton>
      </CodeContainer>
      <XPEarned>350 XP earned</XPEarned>
      <RewardList>
        <AnimatePresence>
          {[100, 100, 100].map((xp, index) => (
           <RewardItem
           key={index}
           as={motion.div}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ delay: index * 0.1 }}
         >
           <RewardInfo>
             <RewardXP>{xp}XP</RewardXP>
             <RewardToken>$NLOV</RewardToken>
           </RewardInfo>
           <ClaimButton
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             {index < 2 ? 'Claim' : 'Claimed'}
           </ClaimButton>
         </RewardItem>
       ))}
     </AnimatePresence>
   </RewardList>
   <p>With each friend you invite, you can get up to 1000 XP and 10% of XP he earned.</p>
   <InviteButton
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     onClick={handleInvite}
   >
     Invite Friends
   </InviteButton>
   <Navbar />
 </InviteWrapper>
);
};

export default Invite;