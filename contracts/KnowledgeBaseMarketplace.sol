// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "./KnowledgeBaseNFT.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract KnowledgeBaseMarketplace is ERC721Holder {
    using SafeMath for uint256;

    struct Sale {
        address payable seller;
        uint256 price;
    }

    // Mapping from token ID to Sale
    mapping(uint256 => Sale) public sales;

    // Reference to the KnowledgeBaseNFT contract
    KnowledgeBaseNFT public knowledgeBaseNFT;

    constructor(address _knowledgeBaseNFT) {
        knowledgeBaseNFT = KnowledgeBaseNFT(_knowledgeBaseNFT);
    }

    // Function to list a KnowledgeBase NFT for sale
    function listForSale(uint256 tokenId, uint256 price) public {
        require(msg.sender == knowledgeBaseNFT.ownerOf(tokenId), "Not the owner");

        // Transfer the NFT to this contract
        knowledgeBaseNFT.safeTransferFrom(msg.sender, address(this), tokenId);

        // List the NFT for sale
        sales[tokenId] = Sale({
            seller: payable(msg.sender),
            price: price
        });
    }

    // Function to buy a KnowledgeBase NFT
    function buy(uint256 tokenId) public payable {
        require(sales[tokenId].price == msg.value, "Incorrect price");

        // Transfer the NFT to the buyer
        knowledgeBaseNFT.safeTransferFrom(address(this), msg.sender, tokenId);

        // Transfer the payment to the seller
        sales[tokenId].seller.transfer(msg.value);

        // Remove the NFT from sale
        delete sales[tokenId];
    }

    // Function to withdraw a KnowledgeBase NFT from sale
    function withdrawFromSale(uint256 tokenId) public {
        require(msg.sender == sales[tokenId].seller, "Not the seller");

        // Transfer the NFT back to the seller
        knowledgeBaseNFT.safeTransferFrom(address(this), msg.sender, tokenId);

        // Remove the NFT from sale
        delete sales[tokenId];
    }
}
