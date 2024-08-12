import { UR } from '../../src/types/ur'
import { toBuffer } from '../utils'
import { KeystoneXrpSDK } from '../chains/xrp'
import { XrpTransaction } from '../chains/xrp/types'

describe('KeystoneXrpSDK', () => {
  const type = 'bytes'
  const xrpSDK = new KeystoneXrpSDK()

  it('should parse account info', () => {
    const accountCborHex = '587e7b2261646472657373223a2272454873444a7475794c67754c5164777734554455666d4248575364384555764b67222c227075626b6579223a22303236336530663537383038313133326664396531323832396336376239653638313835643766376138626233376237386639386539373663336439643136336536227d'

    const expectResult = {
      address: 'rEHsDJtuyLguLQdww4UDUfmBHWSd8EUvKg',
      pubkey: '0263e0f578081132fd9e12829c67b9e68185d7f7a8bb37b78f98e976c3d9d163e6'
    }

    expect(xrpSDK.parseAccount(new UR(Buffer.from(accountCborHex, "hex"), type))).toStrictEqual(expectResult)
  })

  it('should parse signature', () => {
    const signatureCborHex = '58bc12000022800000002404c49431201b04c531dc61400000000098968068400000000000000c73210263e0f578081132fd9e12829c67b9e68185d7f7a8bb37b78f98e976c3d9d163e67446304402202559efe68c5f5d61eccb5ddee82e24960a3b31a59038b0e5d9fdee1b31a05f0302204600823f7e48b01e05b95c127b03fd58e0e0f04620c00f592e064b18c64a12f581149c9a4355b51b024b70d9e7074e555c4ec5cae5a78314b4551ad4ad0273ea551703d51688f52cbe96f8c5'
    const expectResult = '304402202559EFE68C5F5D61ECCB5DDEE82E24960A3B31A59038B0E5D9FDEE1B31A05F0302204600823F7E48B01E05B95C127B03FD58E0E0F04620C00F592E064B18C64A12F5'

    expect(xrpSDK.parseSignature(new UR(toBuffer(signatureCborHex), type))).toEqual(expectResult)
  })

  it('should generateSignRequest', () => {
    const xrpTx: XrpTransaction = {
      TransactionType: "Payment",
      Amount: "10000000",
      Destination: "rHSW257ioNLCsyGNjWqk1RetxZmWYjkAFy",
      Flags: 2147483648,
      Account: "rEHsDJtuyLguLQdww4UDUfmBHWSd8EUvKg",
      Fee: "12",
      Sequence: 79991857,
      LastLedgerSequence: 80032220,
      SigningPubKey: "0263e0f578081132fd9e12829c67b9e68185d7f7a8bb37b78f98e976c3d9d163e6"
    }
    const signRequest = xrpSDK.generateSignRequest(xrpTx)

    const type = 'bytes'
    const cborHex = '5901387b225472616e73616374696f6e54797065223a225061796d656e74222c22416d6f756e74223a223130303030303030222c2244657374696e6174696f6e223a2272485357323537696f4e4c437379474e6a57716b31526574785a6d57596a6b414679222c22466c616773223a323134373438333634382c224163636f756e74223a2272454873444a7475794c67754c5164777734554455666d4248575364384555764b67222c22466565223a223132222c2253657175656e6365223a37393939313835372c224c6173744c656467657253657175656e6365223a38303033323232302c225369676e696e675075624b6579223a22303236336530663537383038313133326664396531323832396336376239653638313835643766376138626233376237386639386539373663336439643136336536227d'
    const expectResult = new UR(toBuffer(cborHex), type)

    expect(signRequest).toStrictEqual(expectResult)
  })
})
