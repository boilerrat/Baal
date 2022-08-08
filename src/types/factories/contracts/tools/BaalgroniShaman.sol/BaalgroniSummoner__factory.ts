/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BaalgroniSummoner,
  BaalgroniSummonerInterface,
} from "../../../../contracts/tools/BaalgroniShaman.sol/BaalgroniSummoner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_template",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "baalgroni",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wrapper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "shares",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lootPerUnit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "cuts",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "initializationParams",
        type: "bytes",
      },
    ],
    name: "SummonBaalgroniComplete",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        internalType: "address",
        name: "wrapper",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shares",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lootPerUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "cuts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "initializationParams",
        type: "bytes",
      },
    ],
    name: "summonBaalgroni",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "template",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161092138038061092183398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b610835806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636f2ddd931461005c578063715018a61461008b5780638da5cb5b14610095578063db21b33a146100a6578063f2fde38b146100b9575b600080fd5b60015461006f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100936100cc565b005b6000546001600160a01b031661006f565b61006f6100b43660046104d8565b6100e0565b6100936100c73660046104b6565b6101c7565b6100d4610245565b6100de600061029f565b565b60015460009081906100fa906001600160a01b03166102ef565b604051639c2694b160e01b81529091506001600160a01b03821690639c2694b19061013b908f908f908f908f908f908f908f908f908f908f9060040161070d565b600060405180830381600087803b15801561015557600080fd5b505af1158015610169573d6000803e3d6000fd5b505050507f46593c981ec79136ecb00ba8bc72decfd75af3de807e7fb02160ebd8f03b5d2f818d8d8d8d8d8d8d8d8d8d6040516101b09b9a9998979695949392919061067c565b60405180910390a19b9a5050505050505050505050565b6101cf610245565b6001600160a01b0381166102395760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102428161029f565b50565b6000546001600160a01b031633146100de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000808260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f0949350505050565b80356001600160a01b038116811461035857600080fd5b919050565b600082601f83011261036e57600080fd5b8135602061038361037e836107c5565b610794565b80838252828201915082860187848660051b89010111156103a357600080fd5b60005b858110156103c9576103b782610341565b845292840192908401906001016103a6565b5090979650505050505050565b600082601f8301126103e757600080fd5b813560206103f761037e836107c5565b80838252828201915082860187848660051b890101111561041757600080fd5b60005b858110156103c95781358452928401929084019060010161041a565b8035801515811461035857600080fd5b600082601f83011261045757600080fd5b813567ffffffffffffffff811115610471576104716107e9565b610484601f8201601f1916602001610794565b81815284602083860101111561049957600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156104c857600080fd5b6104d182610341565b9392505050565b6000806000806000806000806000806101408b8d0312156104f857600080fd5b6105018b610341565b995061050f60208c01610341565b985061051d60408c01610436565b975060608b0135965060808b0135955060a08b0135945060c08b0135935060e08b013567ffffffffffffffff8082111561055657600080fd5b6105628e838f0161035d565b94506101008d013591508082111561057957600080fd5b6105858e838f016103d6565b93506101208d013591508082111561059c57600080fd5b506105a98d828e01610446565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b838110156105f45781516001600160a01b0316875295820195908201906001016105cf565b509495945050505050565b600081518084526020808501945080840160005b838110156105f457815187529582019590820190600101610613565b6000815180845260005b8181101561065557602081850181015186830182015201610639565b81811115610667576000602083870101525b50601f01601f19169290920160200192915050565b600061016060018060a01b03808f168452808e166020850152808d166040850152508a151560608401528960808401528860a08401528760c08401528660e0840152806101008401526106d1818401876105bb565b90508281036101208401526106e681866105ff565b90508281036101408401526106fb818561062f565b9e9d5050505050505050505050505050565b600061014060018060a01b03808e168452808d166020850152508a151560408401528960608401528860808401528760a08401528660c08401528060e0840152610759818401876105bb565b905082810361010084015261076e81866105ff565b9050828103610120840152610783818561062f565b9d9c50505050505050505050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156107bd576107bd6107e9565b604052919050565b600067ffffffffffffffff8211156107df576107df6107e9565b5060051b60200190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220618361f738144436d10d728ffe6134c5deb7713c79ab11298cf5b7daa37385a464736f6c63430008070033";

type BaalgroniSummonerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaalgroniSummonerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaalgroniSummoner__factory extends ContractFactory {
  constructor(...args: BaalgroniSummonerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaalgroniSummoner> {
    return super.deploy(
      _template,
      overrides || {}
    ) as Promise<BaalgroniSummoner>;
  }
  override getDeployTransaction(
    _template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_template, overrides || {});
  }
  override attach(address: string): BaalgroniSummoner {
    return super.attach(address) as BaalgroniSummoner;
  }
  override connect(signer: Signer): BaalgroniSummoner__factory {
    return super.connect(signer) as BaalgroniSummoner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaalgroniSummonerInterface {
    return new utils.Interface(_abi) as BaalgroniSummonerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaalgroniSummoner {
    return new Contract(address, _abi, signerOrProvider) as BaalgroniSummoner;
  }
}
