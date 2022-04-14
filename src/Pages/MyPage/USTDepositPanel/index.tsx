import React, { FunctionComponent } from 'react';
import { VStack, Stack, Text, Divider, HStack, Image, Flex, Button, Tooltip } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import TerraIcon from '../../../assets/Terra.svg'
import { OpenDepositModal, OpenWithdrawModal, useStore, useUSTApr, useUSTDeposited } from '../../../store';
import { floor, floorNormalize } from '../../../Util';

const USTDepositPanel: FunctionComponent = (props) => {
  const {state, dispatch} = useStore();
  const apr = useUSTApr();
  const amount = useUSTDeposited() + floorNormalize(state.userInfoUst.reward_amount);

  return (
    <VStack 
      w={'100%'}
      rounded={'25px'} 
      background={'#212121'} 
      align={'center'}
      spacing={'34px'}
      color={'#CEC0C0'}
      px={{sm:'10px', md:'20px', lg:'50px'}}
      py={{sm:'10px', md:'20px', lg:'29px'}}
    >
      <Grid 
        templateColumns='[first] 20% [line2] 20% [line3] 20% line[4] auto' 
        gap={0} 
        w={'100%'}
      >
        <GridItem w='100%' h='60px'> 

        </GridItem>
        <GridItem w='100%' h='60px'>
          <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
            <Tooltip 
              label="Current annualized deposit rate" 
              background={'#C4C4C4'} hasArrow 
              placement='top-start' 
              color={'black'}
            > 
              <Text
                fontSize={'13px'}
                fontWeight={'860'}
                lineHeight={'15px'}
              >
                APY
              </Text>
            </Tooltip>
          </Flex>
        </GridItem>
        <GridItem w='100%' h='60px'>
          <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
            <Tooltip 
              label="Total of all UST deposits including earnings" 
              background={'#C4C4C4'} hasArrow 
              placement='top-start' 
              color={'black'}
            > 
              <Text
                fontSize={'13px'}
                fontWeight={'860'}
                lineHeight={'15px'}
              >
                Total Balance
              </Text>
            </Tooltip>
          </Flex>
        </GridItem>
        <GridItem w='100%' h='60px'> 
          <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
            <Text
              fontSize={'13px'}
              fontWeight={'860'}
              lineHeight={'15px'}
            >
              Actions
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={4}>
          <Divider orientation={'horizontal'} />
        </GridItem>
        <GridItem w={'100%'} h={'140px'}>
          <HStack 
            w={'100%'} 
            h={'100%'} 
            spacing={'27px'} 
            align={'center'} 
            justify={'center'}
            display={{sm: 'none', md: 'none', lg: 'flex'}}
          >
            <Image src={TerraIcon} w={'50px'} />
            <VStack align={'baseline'}>
              <Text
                fontSize={'35px'}
                fontWeight={'860'}
                lineHeight={'36px'}
                color={'white'}
              >
                UST
              </Text>
              <Text
                fontSize={'15px'}
                fontWeight={'860'}
                lineHeight={'16px'}
                
              >
                Terra USD
              </Text>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem w={'100%'} h={'140px'}>
          <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
            <Text
              fontSize={'15px'}
              fontWeight={'860'}
              lineHeight={'16px'}
              
            >
              {apr}%
            </Text>
          </Flex>
        </GridItem>
        <GridItem w={'100%'} h={'140px'}>
          <VStack w={'100%'} h={'100%'} align={'center'} justify={'center'} >
            <Text
              fontSize={'15px'}
              fontWeight={'860'}
              lineHeight={'16px'}
            >
              {amount.toLocaleString()} UST
            </Text>
            <Text
              fontSize={'15px'}
              fontWeight={'860'}
              lineHeight={'16px'}
            >
              {amount.toLocaleString()} UST
            </Text>
          </VStack>
        </GridItem>
        <GridItem w={'100%'} h={'140px'}>
          <Stack 
            direction={{sm: 'column', md: 'column', lg: 'row'}}
            w={'100%'} 
            h={'100%'} 
            align={'center'} 
            justify={'center'} 
            spacing={'15px'}
          >
            <Button 
              w={'92px'} 
              h={'25px'} 
              background={'#493C3C'} 
              rounded={'25px'}
              onClick = {() => OpenDepositModal(state, dispatch, "ust")}
            >
              <Text
                fontSize={'9px'}
                fontWeight={'860'}
                lineHeight={'10px'}
                color={'white'}
              >
                Deposit
              </Text>
            </Button>
            <Button 
              w={'92px'} 
              h={'25px'} 
              background={'black'} 
              rounded={'25px'}
              border={'solid 1px white'}
              onClick = {() => OpenWithdrawModal(state, dispatch, "ust")}
            >
              <Text
                fontSize={'9px'}
                fontWeight={'860'}
                lineHeight={'10px'}
                      
              >
                Withdraw
              </Text>
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </VStack>
  );
}
export default USTDepositPanel;