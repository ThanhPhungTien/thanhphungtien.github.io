'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8984f887f924327d131173ce6c53a7e2",
"index.html": "f826fa2a0608c14de88a79223d9a7c8d",
"/": "f826fa2a0608c14de88a79223d9a7c8d",
"main.dart.js": "543efd43d79d3b3572f0b87ed278ff25",
"favicon.png": "e4d6330ab1c82d5464d5a37fdacaf2b3",
"icons/Icon-192.png": "b455b55b1040ceca398c4b198dcc119a",
"icons/Icon-512.png": "8490500d8810da79563af5700b9ac573",
"manifest.json": "90afde5d986ab9ac5e0b15528dd4d673",
".git/ORIG_HEAD": "ad9a97ead03692c4769f918b3a1088d5",
".git/config": "eeefd5268865e9e5608998f59a287d21",
".git/objects/61/5ce68e149bbfa74ac1a2a693cd2cb4ed768d5d": "6de864aba7706579f5f08af6d48e5c8e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/d66596c5cbd580982fd1322d90e40cf1aecb5e": "9e177e3f26ed93d5fcf50ea1ffe65400",
".git/objects/92/04a0c7d1c722f184add19e5b1617f8f525f329": "9d4d89546d84241218e3fe9530fe4ae0",
".git/objects/0c/dee0fb8c7dd8ab7c54c6e77c45d214d39572e2": "20080733d4393c62a51e541a23cf8cf0",
".git/objects/0c/205dccc0f7064562c9f49a9f6bad4f33af964f": "dff1a9d58193b19273f0390849d43b71",
".git/objects/50/04b02bda4b892bc353a0c36d5edf6de73a9e03": "7bbf27228199714c0e0671bb94fb97e0",
".git/objects/57/f54475f3d6d4934e932600fc9bfc801c1931ef": "8a951a7ba90a2b3e4a1fe5dedb8d6402",
".git/objects/57/3ec0df8f0ffcc3ac0d36cd9cc9de20219d658a": "a3a1459ee2b144d8cf67998369e659fb",
".git/objects/57/36434830d5756706aa85287c632fd63a140cdd": "c163b297ba3d696c7d66866ec5e67577",
".git/objects/3b/32a96fc2ac639f5b3ca0d3b9c9f07766eca281": "562f016256502e238f0e9355013770e8",
".git/objects/03/a114c9f2a7f14c79de3bf720f0c627bf1f80f8": "bacc41077f81c08cbaa7b40ea1b41f81",
".git/objects/9e/66b9405070cafefc5fd3e188272f6f6284bc23": "f154e2518c671e1ebb5e5d7e5001588b",
".git/objects/6a/df1f1150dd930021d8d9b7ee196751c7108cb1": "5e82690691b9814dbb7d9a8f3caea250",
".git/objects/6a/eda939b00e31535ba7f003bba54645d927248e": "0f864854e491f51e490ab86a48dcd7c0",
".git/objects/32/de0a2fe2c4487981bcd032f07b3da4edfe8d65": "6417181a039518d0ff8a0deeebe71b16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0b/b969e7650bbba28a6a9b9d5dbea7002085ce52": "ec36e3489c1d2164fa3a7b441127af59",
".git/objects/02/d404930b7c7c10c7c4e6f0ee5742ae611a41a1": "3aa0bd210858ca379e7936dbbe3a8e31",
".git/objects/b5/0db31ae318ccf1280f544b67df4e82fd0cd6a2": "c64096be050a021dd5055d08ec67c148",
".git/objects/ac/1271dcf7abea9a48e8182c36e1dc89910665ef": "a111da566725da93595c15d04d2cdf03",
".git/objects/bb/ee7fe2f812cc655c47593cb2bdd9b79acd1d3a": "ccea163a31f31ec84eba2aec88571302",
".git/objects/d7/fa442b525f598c1c5ae8441489ec7bb78d26ee": "35edfa24ccb6633428e366339e6442cf",
".git/objects/d0/4d13589ab6081b49d4f5ce923b87b0f6a6362e": "570acbfc52106f6cdbe5c3813758a301",
".git/objects/da/a524106b68b4e2b9ab842cc5a152a4ecfe8463": "9eeb038f4e051f38b65fd8ac06ea46c0",
".git/objects/d1/731c1d9fcade22b23419253b70567eb2590d5f": "3385aec2d2651c9bd5d4a42844262d22",
".git/objects/ae/1f72d476cd1559dacfb818e95037f243049d29": "3a32a683f9248b5147da70b08cb81fc7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/aaab17c1d12e01587f34fa878a1470db745d51": "8b1efffa7cf48728a169150986431d9c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f3/948a07f6602cecf2b5929028a2cc0338bd40a8": "72382ba3b52d9a269f6739030519c825",
".git/objects/eb/324047b156fc87b0facba41d49249037acbcac": "eeada1c66236bdc471c293cc2dd9b7f4",
".git/objects/c7/269c7c9cfead7eba0b814705553b96aea479f2": "1c477e14e7b6d07077d8544749dc25cc",
".git/objects/c7/daacaa30df68d2300cf08f1b1d292d00903729": "2a0bafae63396c35a974b50106931700",
".git/objects/c7/13ee79d5175c8a06a0f4a01ddcde15cf2f80ad": "68feb7a868f20c8d18864a49f4dad55e",
".git/objects/c0/cc2c3b2b8a8881d7e7dd28874f0f0c7a320307": "1181d774b748b5aa252379439a981c8f",
".git/objects/ee/f49eea490f0c8613df59ab6d06707d82a4fe95": "130396e0f20a05cf4a70836c2ef1cf2e",
".git/objects/fd/c4b8f6527c6abb15b5ca6bae753ff1e9eb3c8f": "1a819d96d305845adaa670da7d53baca",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/52b867066a9a004b1306b10a062eae4e877657": "d57ddeea98371e8efad8cd00165bdcfb",
".git/objects/fe/2e62bf5d4709d0ee28cb2e9870019b11357a8c": "6e335b51a6945e8dc6e3e72cb6147fc9",
".git/objects/fe/a42eb68840dbdbaf7e7bf55a1bb6e48a8c4afb": "11f35ec987925b19ce6180aa44683c90",
".git/objects/fb/e43e84ab2f3597f86b1aed1f8c5f455d8e03cc": "5f6856ed830d38ab356540870d177826",
".git/objects/ec/9651f3fcf68a3777946dcb79675a3af73afba5": "aba61de9f5c92e46ab7171cc77417f1e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/aef55518a50725cae7eda5d0621c96cf1c99da": "13841191b325af88955c53ad8ad3f6b7",
".git/objects/7d/185568a89e0bfd1f68ad07dd2d4bc27c27c9f6": "0866cea2e37263a8c50fe305b91e7c79",
".git/objects/42/5373ac81917fdc490c1e5d43ff05f063a93372": "ca6e923e89f3f50d7d912e86856b2c47",
".git/objects/73/cf3d9b4ff21e14d94c301e349a679341abfef2": "ca80130c4acd33284b045789adf5675a",
".git/objects/17/d74f443bd51a281cec26b7467413c4b18f33d1": "0e53456e898ba3317df514010a309e6d",
".git/objects/7b/35fc209c91d0f5b7ed5b51916ffa6ca2a6f77f": "db25d08cc001cf89c68cf21bfd916f9f",
".git/objects/10/4758f61200a9a3ec88e1b13a14d5555c1265c1": "c44c46b40b830f03a16953659385bf16",
".git/objects/26/82fbdbda840660c4ba2d5a45a13e6c604b260c": "46bcb4b3b09d96dcbb8c43698b7e859b",
".git/objects/75/42f01b47d443dfbf939bbbfb9de26d39fe2f0e": "48f7936af79a887cda183b72849b6fcd",
".git/objects/72/63cd7bb6639e99bf144d8aa476fb9509dbf401": "9e18efb7d8ff8e67717d596720ed97df",
".git/objects/72/35fb412289ae76b58838e43f5207889c4de42f": "c3418f64544de24bc10748d98a263e9e",
".git/objects/2a/b46313f327c67246e2c93d0a7868f7da1cc2c0": "b84b0034c3de8c0b17512117c801b6a8",
".git/objects/2a/d2c95a2db72c21603e1832a385804c64c38b27": "499eb7bfa6c7a7d455ec8cbcf76a2b4a",
".git/objects/2f/a148148c98d763c06a5155b724b4921d062ea6": "3a25f9661a8c804d196c75aac15583f3",
".git/objects/43/5a5cdc12841d2916a99b1db9d6390e56a6bc05": "968712ba096c9dfe5b4861f08472c9d8",
".git/objects/43/806c89ac42140d38988c4ee70157a6ba9221a0": "57bd31b29e95c1e4b9771e850fb1da9a",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/38/bbfbebd9fee1de579a0dd116facd7bef5923c0": "19138eb64ad87050285ca1467132628e",
".git/objects/38/826d1da304cbb08380c4041657b1f34ece7f6e": "6148f33376f0d08cb414ca3b7c7d8879",
".git/objects/00/8901d62fc86e28f5c005607cc11c0d950e7395": "d4b023d4c7040b2a499ba65ed933b55d",
".git/objects/31/dd180f508dcbda4ce05ea16a97e46e95a7eb5d": "a5ee717c661f93bd985ff868b070642b",
".git/objects/37/a0827e5dbf8d2996c84e2e7ee197a9b83747fe": "8e5fb1f763de967dfc6aef611e182a66",
".git/objects/01/985942c0e4e8a22d35a25686366559b62a2f91": "4f42ae3f06e24cbd45092d6083e75314",
".git/objects/6c/ea9734e56a0f566ee8faa97248a2ddcff50975": "49fb582f50c6bdc869dfd7f3fbeec1a2",
".git/objects/97/f50cec6d6659591143d473c030f78b997f0eec": "2f8224a7702c0d2a329a37cfb768f08b",
".git/objects/64/67aa54ed4342d5d229afa20e839ad555b122d1": "0c71b50813b811936bcb0671bd584ef8",
".git/objects/90/cbd89b1b2db5b0f8c4b7bf9dee814ce8174142": "7eb76c2dc05648754a290203957b3af9",
".git/objects/90/fee99c2915d54ae41842f9e87c04eebd11412e": "1db00b6a997dea42d86d88bd0824743c",
".git/objects/d3/346f5998dd2367977dd0b49db44036160b1dc3": "7b348f290752f0d959332b2b7197c819",
".git/objects/d4/49b6b493d7704848403599c425aeaf4605e0cf": "c07f7c6d65d7e4306bf88a6cfd44a5a4",
".git/objects/b8/640a08044c40cbdf9c5941c786d84c82bae6c5": "40fbe3915202b97b591f59f8bbc31d4d",
".git/objects/a9/b3234458ac72d7709e1c610cde863f6f2f8a17": "1dd24a90808aead9a22f11ec2cb86243",
".git/objects/d5/8244a5400133c15b0a9a002fa23bc62e6b9a09": "677ffd165b67b690d84d72c55554eb80",
".git/objects/d5/1c785a5512c39f430c3b37a43cdfbd03fab5bb": "bac5290e3b533c21bf336eaff4a68cdd",
".git/objects/d2/a3cf2b6afedb140a6ecac0de0c4d814945e2c5": "90236500c168006ed079cbeaa26ae83b",
".git/objects/b7/79c8197c5684383bc2969f5b9ee3a212b91604": "4910963cdf332e34606205676b044481",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/09ac34d446d83e50740f99cd9fb3ea8376bc69": "907d083460a1a8666eab9ccf268a773c",
".git/objects/a1/d90c7b4f372ca3e10df07d6eb8265b0c980c1e": "ac4680e922dd0d4e54b108ec5957306e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/5585b10e254a0f6249add74c2aea338cc61fac": "48d604a3ef0ba071d5c521050eb8b763",
".git/objects/c4/2890f5390b84d8ed627a3239b0266ccbf3028c": "d0f906060160f1197a8531610f3461c7",
".git/objects/cc/f2eebdb71e3d87c91026272c808d16aad1c82b": "833944f076faa43ed82a05ca1fe9b73f",
".git/objects/f9/4bf173210205167c8b24d4926ba92e9ebae09a": "64f1bbb1efa67d9f147a4be963e1d9f0",
".git/objects/f0/69a86f837805e9573c9974ff3721eec5afb7cc": "9ae1ff63424392b2545e213b7245ad80",
".git/objects/fa/b2e2f8e40e51c63e4336cd6ea7f0f38b44cde5": "0f960578169c87ba51fc32fe80362bcc",
".git/objects/c5/fc6e63da892d45fcfbf155ece29f37570eefad": "917a697d88be9adfc9abc0074da7968e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/606b57c6b541ebcb883b6ddbaf697a98fc2297": "345a8d99ef8c7246c5acb46024865904",
".git/objects/e0/f038664d621a2184f237bcecc2fc02617f0e64": "4f8f643588daefcb06945486bc65f860",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e76a3f890ac255898d14b0027f74c5e207b084": "e1e63624bae5a208af2396804707469f",
".git/objects/2c/78df591bab175c6136b366fabbaaa14d3e5f8a": "b3940497c45089313ac2d95721e2961d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/ad0356d543be4a703913e7c2c933e126c7d7d8": "a9c2ceb07414c37d0b31a1745e52b560",
".git/objects/48/3b938ea366a054f11da4c3953e86765ab7d072": "7fbd3bd898f1437a12acf42295810a34",
".git/objects/70/587fb4a4e2e670dd83c1bfde9e22db645587f7": "d538fb9066b785c417f715d1413289eb",
".git/objects/84/1c0da2e5a6a587fb85b12a104795bb0b225ad6": "b043f307483bc30206cd7fa853208ce8",
".git/objects/4a/6a5ab49336cff108a2c93994341ed6e7a04b70": "e2b44c157e8913f4343bd60e23e1636d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/798c76a78f5054e34fe70041b359edc201de1a": "24afe9688da5cc846a809f44613fafaa",
".git/objects/15/dda94339ef1f1b705f6dea1393c097588a0dc7": "27b9d3c0b6b9f8e5fe8e3ba40ba21886",
".git/objects/8c/bd79ef90dbb821bb2b54ae99aa90073ec4f5ac": "b03d944d964d1c0d24158df7d5103514",
".git/objects/85/3b2d9044cff0b33bbed67bcb55939551708b4f": "589bb472f1f8a681f6ada9d499e9fc83",
".git/objects/85/43aeeb592f41f3563b0cb781a8a25acef770cd": "3f16716ae5efcdd63f6208911847e8b2",
".git/objects/71/b6f98ff2e01ea61f3cb2f691a8f63f26f36484": "39308133a242f477257b6c24528b202b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/92e304b2a9f619722d14183e73e47ceada04d7": "9fe044942202b54a2d5b8ce63dfc51a4",
".git/objects/82/fe58ca8e47a08193494c4b9c0cfd6e6763b930": "94ba743865989fc5f6486812aadb610c",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/2b/515d115dee47450fd3c6a38ea3918489cd39d7": "a4becef5ac592b0379ad594852a49a27",
".git/objects/13/1bc9c323a17a69efdd15eea8abe02f40d9dc4d": "c0b233ff805547e23c50269249545308",
".git/objects/7f/a559100b17c103e313d44eeeb25208650af349": "2dccbe8c35867e3fb68a1b906cd6ddf1",
".git/objects/7f/27edce2d7d6d95317055ef0406217c4c5faf6c": "0ea5b34444dc1f6eb8ae6ee87bbb0609",
".git/objects/7a/7412144bfbac33d7e68c4f0c1f8cf03f6d344b": "9fd4f8da455651ebbf200f056981fb31",
".git/objects/22/fdc92b122b10fbbac7df432ef06931d6301736": "6b34ee272b61abd1efe46f2d61c0af39",
".git/objects/25/084505d3b8d501d8c4863aa20e31742255a6f5": "f3221d373235c1978e0ceccd4bdb8b11",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c5d18c5dbce12b738cbe04a91ebe6b91",
".git/logs/refs/heads/master": "c5d18c5dbce12b738cbe04a91ebe6b91",
".git/logs/refs/remotes/origin/master": "1051e1416022866e5160346483b4184e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "ad9a97ead03692c4769f918b3a1088d5",
".git/refs/remotes/origin/master": "ad9a97ead03692c4769f918b3a1088d5",
".git/index": "dda69a501529f88fbd93256a1833b9f7",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "b00d317b9d9c3155f20fda465b82fab9",
"assets/images/contact.svg": "dace2daf4531400b174c69ee7a042033",
"assets/images/resume.svg": "68289692c55363961ab4101d8a6796b1",
"assets/images/code.png": "69bbbf250a43425cec63a85e374dd955",
"assets/images/gmail.svg": "f68c94938e4f7dfb81349be34942b7d3",
"assets/images/bitcoin.png": "6c5cc4beae29bc94ea9d19b71a5e7e41",
"assets/images/game.png": "25cfa94735390435ec39bd4becf38858",
"assets/images/github.svg": "e9a25655dbd4e3976ca94d3794cf88a6",
"assets/images/apple_logo.png": "a14ce1b83a318b16fec33cec67038382",
"assets/images/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/images/spring_logo.png": "1e12b870211aac51ccdb6410cd7f66bc",
"assets/images/firestore.png": "8d0e6e99884e6d0cda574046fe71bfd4",
"assets/images/gaming.png": "8903b866c90866ba97d37a6f19329747",
"assets/images/github.png": "f8c053bc783d1e5092300c6850dfe0e1",
"assets/images/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/images/music.png": "6bcc1188e411dff37533a65529b022d7",
"assets/images/background.jpeg": "7c2f6be90af78fc19ed03a503050640d",
"assets/images/google_cloud_platform.png": "292fb5eece48c2fa48ee991ecd883429",
"assets/images/soccer.png": "453950b954a7cc1f76ea9a56311e0d3a",
"assets/images/avatar.jpg": "742688fb15a89e6c50d7046608616f81",
"assets/images/mysql.png": "4c10de8a2fdea9c703c8194e8e73cee3",
"assets/images/facebook.svg": "6b48d59dd8509eb0464305c6dbfe07de",
"assets/images/skills.svg": "43620602004dabe7848041b5a667dfc5",
"assets/images/about.svg": "05c712429d7f84947cd192f97960bd42",
"assets/images/money.png": "dc146c6ab630706713f98eb988ce4082",
"assets/images/football.png": "646729766242d03e01c1b33325f4b3a9",
"assets/images/reading.png": "2f9553c0527d060255f9ad0817d53e89",
"assets/images/linkedin.svg": "c7f5077172cff817aef38803051bdb3a",
"assets/images/android_logo.png": "abe88c8c3b4bb67601abde25cb57dc56",
"assets/images/gmail_logo.png": "66fcd17ebd446ca6b5cce1a098d0c248",
"assets/images/facebook.png": "f6438788e60012a98ccb06039b1cc2c5",
"assets/images/mongodb.png": "28ec40a4d2332648f920ff506571a7d7",
"assets/images/linked_in.png": "d5af2aaefaf2a305e0398e99aade5c2a",
"assets/images/coding.png": "c14b8c097d3f4c8b970f8b4f8a944342",
"assets/images/nodejs.png": "356aea45f1757b8a8a12cea151933c47",
"assets/AssetManifest.json": "83dda0111e937333fbe04a291a8e2095",
"assets/NOTICES": "51b8ad1009fd86649f5acffdc4c32150",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
