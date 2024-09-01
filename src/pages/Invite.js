import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { generateReferralCode, applyReferralCode } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';
import { FaUsers, FaCopy, FaShareAlt } from 'react-icons/fa';
import defaultAvatar from "../Images/second.png";
import logo from '../Images/logo.png';
import neuro from '../Images/logo1.png';
import backgroundImage from "../Images/bg_pattern.svg";

const InviteWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

const Logo = styled.img`
  height: 40px;
  padding: 10px 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; // To account for the fixed header
  padding-bottom: 20px;
`;


const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const CPLevel = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const Referrals = styled.div`
  display: flex;
  align-items: center;
`;

const ReferralIcon = styled(FaUsers)`
  margin-right: 5px;
`;

const RewardSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const RewardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`;

const RewardItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RewardIcon = styled(FaUsers)`
  margin-right: 10px;
`;

const RewardText = styled.span`
  font-size: 16px;
`;

const ClaimButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const UsersCount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InviteLinkSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InviteLink = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.span`
  font-size: 14px;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BonusInfo = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const ReferralsList = styled.div`
  width: 100%;
`;

const ReferralsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const NoReferrals = styled.p`
  text-align: center;
  opacity: 0.8;
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://t.me/OfficialNeroBot?start=${referralCode}`);
    // Show a toast or some feedback that the link was copied
  };

  const handleShare = () => {
    // Implement share functionality
  };

  return (
    <InviteWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <Logo src={logo} alt="New Logo" />
        <Logo src={neuro} alt="Neurolov Logo" />
      </Header>

      <ContentWrapper>
        <Title>Refer and Earn</Title>
        <UserInfo>
          <UserDetail>
            <Avatar src={defaultAvatar} alt="User Avatar" />
            <div>
              <UserName>ALEX</UserName>
              <CPLevel>CP 2</CPLevel>
            </div>
          </UserDetail>
          <Referrals>
            <ReferralIcon /> 6 Referrals
          </Referrals>
        </UserInfo>
       

      <RewardSection>
        <RewardTitle>Referral Rewards</RewardTitle>
        <AnimatePresence>
          {[
            { friends: 1, reward: 10000 },
            { friends: 3, reward: 50000 },
            { friends: 5, reward: 150000 },
          ].map((item, index) => (
            <RewardItem
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <RewardInfo>
                <RewardIcon />
                <RewardText>Invite {item.friends} friend{item.friends > 1 ? 's' : ''}</RewardText>
              </RewardInfo>
              <RewardText>{item.reward.toLocaleString()}</RewardText>
              <ClaimButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim
              </ClaimButton>
            </RewardItem>
          ))}
        </AnimatePresence>
      </RewardSection>

      <UsersCount>0 Users</UsersCount>

      <InviteLinkSection>
        <InviteLink>
          <LinkText>https://t.me/OfficialNeroBot?start={referralCode}</LinkText>
          <ButtonGroup>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyLink}
            >
              <FaCopy />
              Copy
            </ActionButton>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
            >
              <FaShareAlt />
              Share
            </ActionButton>
          </ButtonGroup>
        </InviteLink>
      </InviteLinkSection>

      <BonusInfo>Invite and get %0.5 Bonus for each friend</BonusInfo>

      <ReferralsList>
        <ReferralsTitle>My Referrals:</ReferralsTitle>
        <NoReferrals>You don't have referrals😢</NoReferrals>
      </ReferralsList>
      </ContentWrapper>
      <Navbar />
    </InviteWrapper>
  );
};

export default Invite;