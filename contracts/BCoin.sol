// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BCoin is ERC20, Ownable {
    // The cost of usage in B-coins (10 B-coins = 1 dollar)
    uint256 public usageCost = 10;

    // The usage count of each user
    mapping(address => uint256) public usageCount;

    constructor() ERC20("B-Coin", "BCOIN") {
        _mint(msg.sender, 2000 * (10 ** uint256(decimals())));
    }

    // Function to use the service, which costs some B-coins
    function useService() public {
        require(balanceOf(msg.sender) >= usageCost, "Insufficient B-coins");

        _burn(msg.sender, usageCost);
        usageCount[msg.sender]++;
    }

    // Function to mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
