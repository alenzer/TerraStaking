import React, { FunctionComponent } from 'react';
import { VStack, HStack, Stack, Flex, Text, Input, Link, Center, Divider, Button, useBoolean } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from "react";
import { floorNormalize } from '../../../Util';
import { useNearDeposited, COINTYPE, useStore, ActionKind } from '../../../store'

interface Props {
  amount: string,
  setAmount: Dispatch<SetStateAction<string>>,
}
const InputPanel: FunctionComponent<Props> = (props) => {
  const { state, dispatch } = useStore();
  const ustDeposited = 0;
  const lunaDeposited = 0;

  const maxBalance = () => {
    if (state.coinType === 'USDC')
      props.setAmount(ustDeposited.toString());
    else
      props.setAmount(lunaDeposited.toString());
  }
  return (
    <VStack w={'100%'} spacing={'6px'}>
      <Flex
        background={'#493C3C'}
        rounded={'10px'}
        w={'100%'}
        h={'45px'}
        px={'20px'}
        mt={'27px'}
        align={'center'}
        justify={'space-between'}
      >
        <Text
          fontSize={'13px'}
          fontWeight={'860'}
          lineHeight={'15px'}
          color={'#CEC0C0'}
        >
          AMOUNT
        </Text>
        <Input
          width={'100%'}
          textAlign={'right'}
          color={'white'}
          border={'none'}
          value={props.amount}
          onChange={(e) => props.setAmount(e.target.value)}
          _focus={{ border: 'none' }}
        />
        <Text
          fontSize={'13px'}
          fontWeight={'860'}
          lineHeight={'15px'}
          color={'white'}
        >
          {state.coinType.toUpperCase()}
        </Text>
      </Flex>
      <Flex
        justify={'flex-end'}
        w={'100%'}
      >
        <Text
          fontSize={'9px'}
          fontWeight={'400'}
          lineHeight={'11px'}
          color={'#CEC0C0'}
          cursor={'pointer'}
          onClick={() => maxBalance()}
        >
          {`MAX balance  ${0} ${state.coinType}`}
        </Text>
      </Flex>
    </VStack>
  );
}
export default InputPanel;