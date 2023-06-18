// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract KnowledgeBaseNFT is ERC721 {
    
    struct KnowledgeBase {
        string fileHash;       
        string fileName;       
        string embeddingsHash; 
    }

    // Mapping from token ID to KnowledgeBase
    mapping(uint256 => KnowledgeBase) public knowledgeBases;

    // Current token ID
    uint256 private _currentTokenId = 0;

    constructor() ERC721("KnowledgeBaseNFT", "KBNFT") {}

    // Function to mint a new knowledge base NFT
    function mintKnowledgeBase(string memory fileHash, string memory fileName, string memory embeddingsHash) public returns (uint256) {
        // Increment the token ID
        _currentTokenId++;

        // Mint the new token
        _mint(msg.sender, _currentTokenId);

        // Store the knowledge base data
        knowledgeBases[_currentTokenId] = KnowledgeBase({
            fileHash: fileHash,
            fileName: fileName,
            embeddingsHash: embeddingsHash
        });

        return _currentTokenId;
    }
    
    // Function to get a knowledge base by its token ID
    function getKnowledgeBase(uint256 tokenId) public view returns (string memory, string memory, string memory) {
        KnowledgeBase memory knowledgeBase = knowledgeBases[tokenId];
        return (knowledgeBase.fileHash, knowledgeBase.fileName, knowledgeBase.embeddingsHash);
    }
}
