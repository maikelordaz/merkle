const { StandardMerkleTree } = require("@openzeppelin/merkle-tree")
const fs = require("fs")

const companyA = "Company A"
const couponA = Buffer.from("C12345678N", "utf-8")
const valueA = 50000000

const companyB = "Company B"
const couponB = Buffer.from("C23456789N", "utf-8")
const valueB = 100000000

const companyC = "Company C"
const couponC = Buffer.from("C34567890N", "utf-8")
const valueC = 150000000

const companyD = "Company D"
const couponD = Buffer.from("C45678901N", "utf-8")
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

fs.writeFileSync("tree.json", JSON.stringify(tree.dump()))
