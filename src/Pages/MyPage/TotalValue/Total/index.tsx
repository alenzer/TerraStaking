import React, { FunctionComponent } from 'react';
import { VStack, HStack, Stack, Flex, Text, Image, Link, Center, Divider, Button } from '@chakra-ui/react'

import {MdInfo, MdSwapHoriz} from 'react-icons/md'
import { useUSTBalance, useUSTDeposited, useLUNADeposited, useStore } from '../../../../store';

const Total: FunctionComponent = (props) => {
  const {state, dispatch} = useStore();
  const ustPrice = state.ustPrice;
  const lunaPrice = state.lunaPrice;
  const ustBalance = Math.floor(useUSTBalance() * ustPrice);
  const ustDeposited = Math.floor(useUSTDeposited() * ustPrice);
  const lunaDeposited = Math.floor(useLUNADeposited() * lunaPrice);
  const total = ustBalance + ustDeposited + lunaDeposited;

  return (
    <HStack justify={"space-between"} w={'100%'}>
      <VStack align={'baseline'} w={'100%'}>
        <HStack align={'baseline'} w={'100%'}>
          <Text
            fontSize={'20px'}
            fontWeight={'860'}
            lineHeight={'24px'}
          >
            TOTAL VALUE
          </Text>
          <MdInfo size={'13'}/>
        </HStack>
        <HStack align={'baseline'} w={'100%'}>
          <Text
            fontSize={'35px'}
            fontWeight={'860'}
            lineHeight={'36px'}
          >
            {total.toLocaleString()}
          </Text>
          <Text
            fontSize={'20px'}
            fontWeight={'860'}
            lineHeight={'36px'}
          >
            UST
          </Text>
        </HStack>
      </VStack>
      <Button w={'92px'} h={'25px'} background={'none'} rounded={'25px'} borderColor={'white'} variant='outline'>
        <MdSwapHoriz />
        <Text
          fontSize={'9px'}
          fontWeight={'860'}
          lineHeight={'10px'}
        >
          Swap
        </Text>
      </Button>
    </HStack>
  );
}
export default Total;