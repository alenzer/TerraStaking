import React, { FunctionComponent } from 'react';
import { HStack, Stack, Flex, Text, Image, Link } from '@chakra-ui/react'
import { useStore, useNearPrice, useNearDeposited } from '../../../../store';
import { floor, floorNormalize } from '../../../../Util';
import AnimationNumber from '../../../Components/AnimationNumber';

const TotalLocked: FunctionComponent = (props) => {
  const { state, dispatch } = useStore();
  
  const history = state.amountHistory;
  const last = history.length - 1;

  const total = floor(last >= 0 ? history[last].totalUST : 0);
  const upPercent = 0;
  //last >= 1 ? floor(100 *(history[last].totalUST / history[last - 1].totalUST - 1)) : 0;
  
  return (
    <>
      <Text
        fontSize={'20px'}
        fontWeight={'800'}
        lineHeight={'24px'}
      >
        TOTAL VALUE LOCKED
      </Text>
      <HStack spacing={'10px'} alignItems={'baseline'}>
        <Text
          fontSize={'35px'}
          fontWeight={'800'}
          lineHeight={'36px'}
        >
          <AnimationNumber value={total} />&nbsp;
        </Text>
        <Text
          ml = '0px !important'
          fontSize={'20px'}
          fontWeight={'800'}
          lineHeight={'36px'}
        >
          USD
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'800'}
          lineHeight={'36px'}
          color={'green'}
        >
          {upPercent > 0 ? `▲${upPercent}` : `▼${-1 * upPercent}`}%
        </Text>
      </HStack>
    </>
  );
}
export default TotalLocked;