const { StandardMerkleTree } = require("@openzeppelin/merkle-tree")
const fs = require("fs")
const ethers = require("ethers")

const companyA = "Company A"
const couponA = ethers.toUtf8Bytes("C12345678N")
const valueA = 50000000

const companyB = "Company B"
const couponB = ethers.toUtf8Bytes("C23456789N")
const valueB = 100000000

const companyC = "Company C"
const couponC = ethers.toUtf8Bytes("C34567890N")
const valueC = 150000000

const companyD = "Company D"
const couponD = ethers.toUtf8Bytes("C45678901N")
const valueD = 200000000

const values = [
    [companyA, couponA, valueA],
    [companyB, couponB, valueB],
    [companyC, couponC, valueC],
    [companyD, couponD, valueD],
]

const tree = StandardMerkleTree.of(values, ["string", "bytes", "uint256"])

console.log("Merkle Root:", tree.root)
console.log(tree.render())

fs.writeFileSync("couponTree.json", JSON.stringify(tree.dump()))
