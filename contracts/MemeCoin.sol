// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MemeCoin is ERC20 {
    constructor() ERC20("dummy_name", "dummy_symbol") {
        uint256 initialSupply = 7800000000 * 10 ** decimals(); // 7.8 billion tokens
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18; // 18 decimals (default)
    }
}
