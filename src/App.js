/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import { ABI } from './dreamabi.js';
import { ethers } from 'ethers';
import { useWallet, UseWalletProvider } from 'use-wallet';
const net = 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const provider = new ethers.providers.JsonRpcProvider(net);
const NameContract = new ethers.Contract('0x9a422A2544EBCAf38a59fe7Bd6F04DD4c0e74E4b', ABI, provider);
function App() {
	const wallet = useWallet();
	var styledAddress = wallet.account ? wallet.account.slice(0, 4) + '..' + wallet.account.slice(-4) : '';
	const handleClaim = async () => {
		let tx = await NameContract.GetBuyBackTimeInterval().catch((err) => {
			console.log('contract err', err);
		});
		console.log('result:', tx);
		// console.log(tx.hash);
	};

	const handleConnect = async () => {
		wallet.connect().then(() => {
			if (wallet.status === 'error') {
				console.log('testing');
				alert('Plase choose right chain-Ethereum mainnet');
			}
		});

		console.log(styledAddress);
	};
	const [BNBAmount, setBNB] = useState(0);

	const handleBNBAmount = async() => {
		setBNB(BNBAmount => BNBAmount + 10000);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			handleBNBAmount();
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div id="wrapper">
				<div id="main">
					<div className="inner">
						<section id="home-section">
							<ul id="buttons05" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>

							<ul className="social-icons">
								<li className="social-icon-font-lg">
									<a
										target="_blank"
										href="https://join.skype.com/wYphtMy4Zbgh"
										data-nsfw-filter-status="swf"
										rel="noreferrer"
									>
										<i className="fab fa-skype" />
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://www.instagram.com/invites/contact/?i=1t00ha8ct3jwo&amp;utm_content=me60his"
										data-nsfw-filter-status="swf"
										rel="noreferrer"
									>
										<img
											src={process.env.PUBLIC_URL + '/assets/svgs/instagram.svg'}
											alt=""
											width="36px"
											className="social-icon"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://mobile.twitter.com/dreamcoinmax"
										data-nsfw-filter-status="swf"
										rel="noreferrer"
									>
										<img
											src={process.env.PUBLIC_URL + '/assets/svgs/twitter.svg'}
											alt=""
											width="36px"
											className="social-icon"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://t.me/DreamCoinOfficialGroup"
										data-nsfw-filter-status="swf"
										rel="noreferrer"
									>
										<img
											src={process.env.PUBLIC_URL + '/assets/svgs/telegram.svg'}
											alt=""
											width="36px"
											className="social-icon"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://www.facebook.com/groups/789161261754035/"
										data-nsfw-filter-status="swf"
										rel="noreferrer"
									>
										<img
											src={process.env.PUBLIC_URL + '/assets/svgs/facebook.svg'}
											alt=""
											width="36px"
											className="social-icon"
										/>
									</a>
								</li>
							</ul>

							<ul id="buttons02" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Launch 25th July 2021
									</a>
								</li>
							</ul>
							<div id="image01" className="image">
								<span className="deferred">
									<img
										src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA0MzUgNDM1IiB3aWR0aD0iNDM1IiBoZWlnaHQ9IjQzNSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI%2BPHJlY3QgZmlsbD0idHJhbnNwYXJlbnQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4%3D"
										data-src="assets/images/image01.png"
										alt=""
									/>
								</span>
							</div>
							<h1 id="text09">Dreamcoin (HOPE)</h1>
							<p id="text04">
								Dream Coin is a charitable based token. Dream coin holders makes suggestions and vote on
								all charitable donations. Donations will go to hospitals, children, homeless and animal
								organizations, as chosen and approved by community majority vote. Also annually, ongoing
								Dream Community will create a scholarship fund for donation and randomly select an
								outstanding student heading to college.
							</p>
							<h2 id="text03">ENJOY A BIG BENEFIT AND A SAFE LP TOKEN</h2>
							<div id="container01" className="container columns">
								<div className="wrapper">
									<div className="inner">
										<div>
											<div id="image02" className="image">
												<img src="assets/images/image02.png" alt="" />
											</div>
										</div>
										<div>
											<p id="text07">Dream Coin Features</p>
											<p id="text02">
												<span>
													Dream Coin most exciting feature is that it’s the first created
												</span>
												<br />
												<span>
													Independent “LPMAX” (liquidity pool) and it put the true power in
													each holders hands. It minimizes and frustrates rug pulls, price
													manipulations and pump/dumps schemes. Our Smart Chain Contract
													promotes actual assurance and insurance for the growth for our
													holders.
												</span>
												<br />
												<br />
												<span>
													Our team does not hold massive amounts of tokens and may not do so
													during presale or public offering! Everyone with Dream Coin gets a
													fair opportunity to succeed together.
												</span>
												<br />
												<br />
												<span>
													Our Team is dedicated to ongoing support and complete transparency.
													Understand That We Do Not Give Financial Advice Please Do Your Own
													Research (DYOR)!!! We Only Look Forward To Going To The Moon
													Together and Hope To Make Real Dreams Come True!!!
												</span>
												<br />
												<br />
												<span>Reflection:</span>
												<br />
												<span>
													We distribute the 8% transaction fees to holders, so every holder
													can take benefit from this redistribution.
												</span>
												<br />
												<br />
												<span>The difference between buyers and sellers:</span>
												<br />
												<span>
													We are setting the fee as low for buyers and more fees for sellers.
													we are “dedicated” to keeping our system more efficient to benefit
													holders.
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<h2 id="text05">Aim of Dream Coin</h2>
							<div id="container02" className="container columns">
								<div className="wrapper">
									<div className="inner">
										<div>
											<p id="text06">
												We’ve developed an Independent Liquidity Pool called “LPMAX” which is
												designed to maximize the benefit of potential holders and to safeguard
												against rug pulls, dumps or any other market manipulation. As we grow
												steadily were constantly developing top methods to our LPMAX ensure
												everyone’s long term success.
											</p>
										</div>
										<div>
											<div id="image03" className="image">
												<img src="assets/images/image03.png" alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<ul id="icons02" className="icons">
								<li>
									<a className="n01" href="#roadmap">
										<svg id="icon-961" viewBox="0 0 40 40">
											<path d="M34.6,20c0,0.7-0.2,1.3-0.7,1.8L21.1,34.6c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5 c-0.5-0.5-0.7-1.1-0.7-1.8s0.2-1.3,0.7-1.8l5.8-5.8H8c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5c0-0.7,0.2-1.3,0.6-1.8 c0.4-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.8,12.8C34.4,18.7,34.6,19.3,34.6,20z" />
										</svg>
										<span className="label">Right Arrow</span>
									</a>
								</li>
							</ul>
							<p id="text13">Copyright © 2021 Dream LLC. | All Rights Reserved</p>
						</section>
						<section id="roadmap-section">
							<ul id="buttons07" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>
							<div id="container03" className="container columns">
								<div className="wrapper">
									<div className="inner">
										<div>
											<p id="text01">
												<span>The Developer:</span>
												<br />
												<br />
												<span>“@Crypto_Realtor”</span>
												<br />
												<br />
												<span>
													Curtis is A Licensed Realtor, US Navy Veteran &amp; Investor
												</span>
											</p>
										</div>
										<div>
											<div id="image04" className="image">
												<span className="deferred">
													<img
														src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA5NTIgOTUxIiB3aWR0aD0iOTUyIiBoZWlnaHQ9Ijk1MSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI%2BPHJlY3QgZmlsbD0iIzRjNTU1ZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg%3D%3D"
														data-src="assets/images/image04.jpg"
														alt=""
													/>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h1 id="text12">Charity and Scholarship</h1>
							<div id="container05" className="container columns">
								<div className="wrapper">
									<div className="inner">
										<div>
											<p id="text11">
												<span>CHARITABLE DONATIONS WALLET WILL BEGIN ACCUMULATIONS.</span>
												<br />
												<br />
												<span>
													Upon Reaching A Market Cap of 250k Dollars: CHARITABLE DONATIONS
													WALLET WILL BEGIN ACCUMULATIONS.
												</span>
												<br />
												<span>
													Upon accumulation of every $10k or more. Dream Coin Community makes
													suggestions for and/or what charitable cause to donate to. (.25% Of
													Buyers/Sellers Fees Will Be Contributed To Donation Wallet).
												</span>
												<br />
												<br />
												<span>SCHOLARSHIPS REWARDS WALLET WILL BEGIN ACCUMULATIONS.</span>
												<br />
												<br />
												<span>For scholarships:</span>
												<br />
												<span>
													Upon accumulation of every $10k or more. Dream Coin Community will
													begin accepting applications for freshmen students entering college
													and vote for the most outstanding students to be
													rewarded.(Application Submissions/Requisites Required TBD).
												</span>
												<br />
												<span>
													It Is Projected That Scholarships Will Be Rewarded Before Fall &amp;
													Spring Semesters Begin. (0.25% Of Buyers/Sellers Fees Will Be
													Contributed To This Wallet).
												</span>
											</p>
										</div>
										<div>
											<div id="image05" className="image">
												<span className="deferred">
													<img
														src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA5NTIgOTUyIiB3aWR0aD0iOTUyIiBoZWlnaHQ9Ijk1MiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI%2BPHJlY3QgZmlsbD0idHJhbnNwYXJlbnQiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4%3D"
														data-src="assets/images/image05.png"
														alt=""
													/>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="container06" className="container default">
								<div className="wrapper">
									<div className="inner">
										<div id="image06" className="image" data-position="center">
											<span className="deferred">
												<img
													src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMzU3IDE5MjAiIHdpZHRoPSIxMzU3IiBoZWlnaHQ9IjE5MjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyZWN0IGZpbGw9IiMxOTBkMWUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4%3D"
													data-src="assets/images/image06.jpg"
													alt=""
												/>
											</span>
										</div>
									</div>
								</div>
							</div>
							<ul id="icons03" className="icons">
								<li>
									<a className="n01" href="#home">
										<svg id="icon-960" viewBox="0 0 40 40">
											<path d="M34.2,18.7v2.5c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7H18.1l5.8,5.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8 l-1.5,1.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7L6.1,21.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8L18.8,5.4 c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l1.5,1.5c0.5,0.5,0.7,1.1,0.7,1.8s-0.2,1.3-0.7,1.8l-5.8,5.8h13.8 c0.7,0,1.2,0.2,1.7,0.7C34,17.5,34.2,18,34.2,18.7z" />
										</svg>
										<span className="label">Left Arrow</span>
									</a>
								</li>
								<li>
									<a className="n02" href="#whitepaper">
										<svg id="icon-961" viewBox="0 0 40 40">
											<path d="M34.6,20c0,0.7-0.2,1.3-0.7,1.8L21.1,34.6c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5 c-0.5-0.5-0.7-1.1-0.7-1.8s0.2-1.3,0.7-1.8l5.8-5.8H8c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5c0-0.7,0.2-1.3,0.6-1.8 c0.4-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.8,12.8C34.4,18.7,34.6,19.3,34.6,20z" />
										</svg>
										<span className="label">Right Arrow</span>
									</a>
								</li>
							</ul>
							<p id="text17">Copyright © 2021 Dream LLC. | All Rights Reserved</p>
						</section>
						<section id="whitepaper-section">
							<ul id="buttons06" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>
							<p id="text08">
								<span>
									<u>
										<strong>Dream Protocol WhitePaper</strong>
									</u>
								</span>
								<br />
								<br />
								<span>Static Rewards, LP Acquisition, Autobuyback and Burn</span>
								<br />
								<span>
									Dream coin implemented the autobuyback and burn feature. This happens automatically
									when there is selling. With this, we were ensuring that our LPMAX was safe during
									buy/sells transactions .
								</span>
								<br />
								<br />
								<span>
									<strong>THE PURPOSE OF THE “LPMAX” (Liquidity Pool).</strong>
								</span>
								<br />
								<br />
								<span>
									Many of us avid crypto currency investors may have been subjected to many types of
									unfortunate events, such as, scams, rug pulls, honey pots, pump/dumps, etc.. that
									may have caused an unfair loss. Therefore, being around a while and even
									experiencing a few of those terrible circumstances, we concluded that we needed a
									solution and more “Developer Transparency &amp; Accountability”.
								</span>
								<br />
								<br />
								<span>
									<strong>So Our Team Created Dream Coin and The LPMAX (Liquidity Pool)</strong>
								</span>
								<br />
								<br />
								<span>
									The most important elements that we decided were necessary were investment
									safeguards. Therefore, it was imperative that we thought about needed give assurance
									and insurance for investors by permitting it to have “maximum” buy in/sell limits.
									In this case, 0.3BNB per transaction. We believe this assures a healthy stable and
									steady growth of Dream Coin’s Token Value. Additionally, we also believe that it was
									necessary to reward long term investors (holders) with 8% redistribution from all
									sells. This made economical sense to us because it promotes growth and prospering
									benefits to everyone. Lastly, to demonstrate a promising token value to holders of
									Dream Coin. We implemented the BuyBack/AutoBurn of Dream Coin Tokens . Out of A
									Supply of 120 Million Dream Coins Were Set To Burn A Maximum Up to 50% of Its
									Supply, Resulting In A Maximum of 60 Million Dream Coin. It is our hope to minimize
									market crashes, frustrate scamming techniques and to help improve crypto investing
									“Hopes” To Make Everyone “Dreams Come True.”
								</span>
								<br />
								<br />
								<span>
									<strong>Why Static?</strong>
								</span>
								<br />
								<br />
								<span>
									Static rewards solve a host of problems. First, the reward amount is conditional
									upon the volume of the token being traded. This mechanism aims to alleviate some of
									the downward sell pressure put on the token caused by earlier adopters selling their
									tokens after farming crazy high APY’s. Second, the reflect mechanism encourages
									holders to hang onto their tokens to garner higher kick-backs which are based upon a
									percentages carried out and dependant upon the total tokens held by the owner.
								</span>
								<br />
								<br />
								<span>
									<strong>Auto buyback and Burn</strong>
								</span>
								<br />
								<br />
								<span>
									Dream coin implemented the auto buyback and burn feature. This happens automatically
									when there is a selling. With this, we were ensuring that our LPMAX was safe during
									buy/sells transactions.
								</span>
								<br />
								<br />
								<span>
									<strong>Manual Burns</strong>
								</span>
								<br />
								<br />
								<span>
									Sometimes burns matter; sometimes they don’t. A continuous burn on any one protocol
									can be nice in the early days, however, this means the burn cannot be finite or
									controlled in any way. Having burns controlled by the team and promoted based on
									achievements helps to keep the community rewarded and informed. The conditions of
									the manual burn and the amounts can be advertised and tracked.
								</span>
								<br />
								<br />
								<span>
									Dream aims to implement a burn strategy that is beneficial and rewarding for those
									engaged for the long term. Furthermore, the total number of Dream burned is featured
									on our readout located on the website which allows for further transparency in
									identifying the current circulating supply at any given point of time.
								</span>
								<br />
								<br />
								<span>
									<strong>Automatic Liquidity Pool (LP)</strong>
								</span>
								<br />
								<br />
								<span>
									Automatic LP is the secret sauce of Dream. Here we have a function that acts as a
									two-fold beneficial implementation for holders.
								</span>
								<br />
								<br />
								<span>
									First, the contract sucks up tokens from sellers and buyers alike, and adds them to
									the LP creating a solid price floor.
								</span>
								<br />
								<br />
								<span>
									Second, the penalty acts as an arbitrage resistant mechanism that secures the volume
									of Dream as a reward for the holders. In theory, the added LP creates a stability
									from the supplied LP by adding the tax to the overall liquidity of the token, thus
									increasing the tokens overall LP and supporting the price floor of the token. This
									is different from the burn function of other reflection tokens which is only
									beneficial in the short term from the granted reduction of supply.
								</span>
								<br />
								<br />
								<span>
									As the Dream token LP increases, the price stability mirrors this function with the
									benefit of a solid price floor and cushion for holders. The goal here is to prevent
									the larger dips when whales decide to sell their tokens later in the game, which
									keeps the price from fluctuating as much as if there was no automatic LP function.
								</span>
								<br />
								<br />
								<span>
									All of this is an effort to alleviate some of the troubles we have seen with the
									current DeFi reflection tokens. We are confident that this model and protocol will
									prevail over the outdated reflection tokens for these reasons
								</span>
								<br />
								<br />
								<span>
									<strong>Tokenomics</strong>
								</span>
							</p>

							<div className="card border-0 overflow-hidden">
								<table className="table table-borderless text-white">
									<thead className="thead-dark">
										<tr>
											<th />
											<th>Number</th>
											<th>Shorthand</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-right">Total Supply</td>
											<td>120,000,000</td>
											<td>120 Millions</td>
										</tr>
										<tr>
											<td className="text-right">Burned Dev Tokens</td>
											<td>20,000,000(Increasing)</td>
											<td>20 Millions</td>
										</tr>
										<tr>
											<td className="text-right">Fair Launch Supply</td>
											<td>100,000,000(Decreasing)</td>
											<td>100 Millions</td>
										</tr>
									</tbody>
								</table>
							</div>

							<p id="text21">
								<br />
								<br />
								<span>
									<strong>We Have Accomplished The Following Since July 25, 2021 Fair Launch.</strong>
									<br />
								</span>{' '}
								<br />
								<br />
								<span>Acquired Over 1600 Twitter Followers</span> <br />
								<span>Acquired Over 1500 Telegram Members</span> <br />
								<span>Hit An ATH of 44k Market Cap</span>
								<br />
								<span>We Have Achieved Attaining Over 450 Dream Coin Holders</span>
								<br />
								<span>We’ve Applied To Be Listed on Coin Market Cap (CMC) Exchange</span>
								<br />
								<span>We’ve Applied To Be Listed On CoinGecko Exchange</span> <br />
								<span>We are On A Continuous &amp; Organic Incline Of Achievements.</span>
								<br />
								<span>
									<br />
									<strong>Dream Protocol</strong>
									<br />
								</span>
								<br />
								<br />
								<span>
									The Dream Protocol is a community driven, fair launched DeFi Token. Three simple
									functions occur during each trade:
								</span>
								<br />
								<span>Reflection, LP Acquisition, &amp; Burn.</span>
							</p>
							<ul id="icons04" className="icons">
								<li>
									<a className="n01" href="#roadmap">
										<svg id="icon-960" viewBox="0 0 40 40">
											<path d="M34.2,18.7v2.5c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7H18.1l5.8,5.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8 l-1.5,1.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7L6.1,21.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8L18.8,5.4 c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l1.5,1.5c0.5,0.5,0.7,1.1,0.7,1.8s-0.2,1.3-0.7,1.8l-5.8,5.8h13.8 c0.7,0,1.2,0.2,1.7,0.7C34,17.5,34.2,18,34.2,18.7z" />
										</svg>
										<span className="label">Left Arrow</span>
									</a>
								</li>
								<li>
									<a className="n02" href="#reward">
										<svg id="icon-961" viewBox="0 0 40 40">
											<path d="M34.6,20c0,0.7-0.2,1.3-0.7,1.8L21.1,34.6c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5 c-0.5-0.5-0.7-1.1-0.7-1.8s0.2-1.3,0.7-1.8l5.8-5.8H8c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5c0-0.7,0.2-1.3,0.6-1.8 c0.4-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.8,12.8C34.4,18.7,34.6,19.3,34.6,20z" />
										</svg>
										<span className="label">Right Arrow</span>
									</a>
								</li>
							</ul>
							<ul id="icons06" className="icons">
								<li>
									<a className="n01" href="#home">
										<svg id="icon-902" viewBox="0 0 40 40">
											<path d="M33.3,22.3v11.2c0,0.4-0.1,0.8-0.4,1.1c-0.3,0.3-0.6,0.4-1.1,0.4h-9v-9h-6v9h-9c-0.4,0-0.8-0.1-1.1-0.4 c-0.3-0.3-0.4-0.6-0.4-1.1V22.3c0,0,0,0,0-0.1s0-0.1,0-0.1L19.9,11l13.5,11.1C33.3,22.1,33.3,22.2,33.3,22.3L33.3,22.3z M38.5,20.6 l-1.5,1.7c-0.1,0.1-0.3,0.2-0.5,0.3h-0.1c-0.2,0-0.4-0.1-0.5-0.2L19.9,9L3.7,22.5c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.5-0.3 l-1.5-1.7C1,20.5,1,20.3,1,20.1s0.1-0.4,0.3-0.5l16.8-14C18.6,5.2,19.2,5,19.9,5s1.3,0.2,1.8,0.6l5.7,4.8V5.8c0-0.2,0.1-0.4,0.2-0.5 S27.9,5,28.1,5h4.5c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5v9.5l5.1,4.3c0.2,0.1,0.2,0.3,0.3,0.5 C38.7,20.3,38.7,20.5,38.5,20.6L38.5,20.6z" />
										</svg>{' '}
										<span className="label">Home</span>
									</a>
								</li>
							</ul>
							<p id="text16">Copyright © 2021 Dream LLC. | All Rights Reserved</p>
						</section>
						<section id="last-section">
							<ul id="buttons08" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>
							<div id="container04" className="container default">
								<div className="wrapper">
									<div className="inner">
										<p id="text10">
											<span>Static Rewards</span>
											<br />
											<span>🔥🔥🔥</span>
											<br />
											<span>LP Acquisition</span>
											<br />
											<span>🔥🔥🔥</span>
											<br />
											<span>Autobuyback and Burn</span>
											<br />
											<span>🔥🔥🔥</span>
											<br />
											<span>BNB Rewards</span>
										</p>
										<ul className="social-icons">
											<li className="social-icon-font">
												<a
													target="_blank"
													href="https://join.skype.com/wYphtMy4Zbgh"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<i className="fab fa-skype" />
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://www.instagram.com/invites/contact/?i=1t00ha8ct3jwo&amp;utm_content=me60his"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/instagram.svg'}
														alt=""
														width="27px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://mobile.twitter.com/dreamcoinmax"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/twitter.svg'}
														alt=""
														width="27px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://t.me/DreamCoinOfficialGroup"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/telegram.svg'}
														alt=""
														width="27px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://www.facebook.com/groups/789161261754035/"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/facebook.svg'}
														alt=""
														width="27px"
														className="social-icon"
													/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<ul id="icons05" className="icons">
								<li>
									<a className="n01" href="#home">
										<svg id="icon-902" viewBox="0 0 40 40">
											<path d="M33.3,22.3v11.2c0,0.4-0.1,0.8-0.4,1.1c-0.3,0.3-0.6,0.4-1.1,0.4h-9v-9h-6v9h-9c-0.4,0-0.8-0.1-1.1-0.4 c-0.3-0.3-0.4-0.6-0.4-1.1V22.3c0,0,0,0,0-0.1s0-0.1,0-0.1L19.9,11l13.5,11.1C33.3,22.1,33.3,22.2,33.3,22.3L33.3,22.3z M38.5,20.6 l-1.5,1.7c-0.1,0.1-0.3,0.2-0.5,0.3h-0.1c-0.2,0-0.4-0.1-0.5-0.2L19.9,9L3.7,22.5c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.5-0.3 l-1.5-1.7C1,20.5,1,20.3,1,20.1s0.1-0.4,0.3-0.5l16.8-14C18.6,5.2,19.2,5,19.9,5s1.3,0.2,1.8,0.6l5.7,4.8V5.8c0-0.2,0.1-0.4,0.2-0.5 S27.9,5,28.1,5h4.5c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5v9.5l5.1,4.3c0.2,0.1,0.2,0.3,0.3,0.5 C38.7,20.3,38.7,20.5,38.5,20.6L38.5,20.6z" />
										</svg>{' '}
										<span className="label">Home</span>
									</a>
								</li>
							</ul>
							<p id="text15">Copyright © 2021 Dream LLC. | All Rights Reserved</p>
						</section>
						<section id="reward-section">
							<ul id="buttons07" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>
							<div id="container04" className="container default">
								<div className="wrapper">
									<div className="inner">
										<div className="reward">
											<div className="reward-left">
												<p className="reward-title">
													HOLD DreamCoin and get rewarded in BNB on every 7 days!
												</p>

												<p className="reward-text">
													DreamCoin is completely decentralized and all decisions are made by
													a community poll. Which gives our developers a better idea of how to
													move forward with DreamCoin. The DreamCoin developer team has no
													team tokens. In other words, our team has to participate in the
													DreamCoin presale along with other investors.
												</p>

												<ul className="outline-button buttons">
													{wallet.status === 'connected' ? (
														<div>
															<div>Account: {styledAddress}</div>
															<div>Balance: {wallet.balance}</div>
															<button className="button" onClick={() => wallet.reset()}>
																disconnect
															</button>
														</div>
													) : (
														<li>
															<button className="button" onClick={handleConnect}>
																Connect Wallet
															</button>
														</li>
													)}

													<li>
														<button className="button" onClick={handleClaim}>
															Claim BNB
														</button>
													</li>
												</ul>
											</div>

											<div className="reward-right">
												<div id="image03" className="image">
													<img src="assets/images/uni-img2.png" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<ul id="icons04" className="icons">
								<li>
									<a className="n01" href="#whitepaper">
										<svg id="icon-960" viewBox="0 0 40 40">
											<path d="M34.2,18.7v2.5c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7H18.1l5.8,5.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8 l-1.5,1.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7L6.1,21.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8L18.8,5.4 c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l1.5,1.5c0.5,0.5,0.7,1.1,0.7,1.8s-0.2,1.3-0.7,1.8l-5.8,5.8h13.8 c0.7,0,1.2,0.2,1.7,0.7C34,17.5,34.2,18,34.2,18.7z" />
										</svg>
										<span className="label">Left Arrow</span>
									</a>
								</li>
								<li>
									<a className="n02" href="#last">
										<svg id="icon-961" viewBox="0 0 40 40">
											<path d="M34.6,20c0,0.7-0.2,1.3-0.7,1.8L21.1,34.6c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5 c-0.5-0.5-0.7-1.1-0.7-1.8s0.2-1.3,0.7-1.8l5.8-5.8H8c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5c0-0.7,0.2-1.3,0.6-1.8 c0.4-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.8,12.8C34.4,18.7,34.6,19.3,34.6,20z" />
										</svg>
										<span className="label">Right Arrow</span>
									</a>
								</li>
							</ul>
						</section>

						<section id="airdrop-section">
							<ul id="buttons07" className="buttons">
								<li>
									<a href="#home" className="button n01">
										Home
									</a>
								</li>
								<li>
									<a href="#roadmap" className="button n02">
										Roadmap
									</a>
								</li>
								<li>
									<a href="#whitepaper" className="button n03">
										Whitepaper
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://bscscan.com/address/0x024cefc085032c68cc0744c2b3528f7a47429210/"
										className="button n04"
										rel="noreferrer"
									>
										Contract
									</a>
								</li>
								<li>
									<a href="#reward" className="button n05">
										Reward BNB
									</a>
								</li>
								<li>
									<a href="#five" className="button n05">
										Team
									</a>
								</li>
								<li>
									<a href="#airdrop" className="button n05">
										Airdrop and Presale
									</a>
								</li>
							</ul>

							<div id="container04" className="container default">
								<div className="wrapper">
									<div className="inner">
										<ul className="social-icons">
											<li className="social-icon-font-lg">
												<a
													target="_blank"
													href="https://join.skype.com/wYphtMy4Zbgh"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<i className="fab fa-skype" />
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://www.instagram.com/invites/contact/?i=1t00ha8ct3jwo&amp;utm_content=me60his"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/instagram.svg'}
														alt=""
														width="36px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://mobile.twitter.com/dreamcoinmax"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/twitter.svg'}
														alt=""
														width="36px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://t.me/DreamCoinOfficialGroup"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/telegram.svg'}
														alt=""
														width="36px"
														className="social-icon"
													/>
												</a>
											</li>
											<li>
												<a
													target="_blank"
													href="https://www.facebook.com/groups/789161261754035/"
													data-nsfw-filter-status="swf"
													rel="noreferrer"
												>
													<img
														src={process.env.PUBLIC_URL + '/assets/svgs/facebook.svg'}
														alt=""
														width="36px"
														className="social-icon"
													/>
												</a>
											</li>
										</ul>
										<div>
											<ul className="outline-button buttons">
												{wallet.status === 'connected' ? (
													<div>
														<div>Account: {styledAddress}</div>
														<div>Balance: {wallet.balance}</div>
														<button className="btn-spec" onClick={() => wallet.reset()}>
															disconnect
														</button>
													</div>
												) : (
													<li>
														<button className="btn-spec" onClick={handleConnect}>
															Connect Wallet
														</button>
													</li>
												)}
											</ul>
										</div>
										<div>
											<span className="raised-bnb">
												Raised BNB Amount:
											</span>
											<span className="raised-bnb">
												{BNBAmount}
											</span>
										</div>
										<div id="timer01" className="timer">
											<div className="timer-container">
												<span className="timer-title">
													Airdrop end time
												</span>
												<ul className="timer">
													<li className="number days">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">2</span>
															</span>
															<span className="label">
																<span className="full invisible">Days</span>
																<span className="abbreviated">Days</span>
																<span className="initialed invisible">D</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number hours">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Hours</span>
																<span className="abbreviated">Hrs</span>
																<span className="initialed invisible">H</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number minutes">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Minutes</span>
																<span className="abbreviated">Mins</span>
																<span className="initialed invisible">M</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number seconds">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Seconds</span>
																<span className="abbreviated">Secs</span>
																<span className="initialed invisible">S</span>
															</span>
														</div>
													</li>
												</ul>
											</div>
											<span className="timer-tip">
												If you don't have DreamCoin, hod 100 Dreams as free.
											</span>
											<ul className="outline-button buttons">
												<li><button className="btn-buy">Airdrop for Free</button></li>
											</ul>
											<span className="timer-tip">
												Exchange old dream as new DREAM coin
											</span>
											<ul className="outline-button buttons">
												<li><button className="btn-buy">Exchange with old Dream.</button></li>
											</ul>

										</div>

										<div id="timer02" className="timer">
											<div className="timer-container">
												<span className="timer-title">
													Presale EndTime
												</span>
												<ul className="timer">
													<li className="number days">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">4</span>
															</span>
															<span className="label">
																<span className="full invisible">Days</span>
																<span className="abbreviated">Days</span>
																<span className="initialed invisible">D</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number hours">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Hours</span>
																<span className="abbreviated">Hrs</span>
																<span className="initialed invisible">H</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number minutes">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Minutes</span>
																<span className="abbreviated">Mins</span>
																<span className="initialed invisible">M</span>
															</span>
														</div>
													</li>
													<li className="delimiter">
														<span className="symbol timer-symbol">:</span>
													</li>
													<li className="number seconds">
														<div className="item">
															<span className="digit count2 timer-digit">
																<span className="component timer-digit-text">0</span>
																<span className="component timer-digit-text">0</span>
															</span>
															<span className="label">
																<span className="full invisible">Seconds</span>
																<span className="abbreviated">Secs</span>
																<span className="initialed invisible">S</span>
															</span>
														</div>
													</li>
												</ul>
											</div>
											<span className="timer-tip">
												Presale Cost: 1BNB= 100,000 Dream
												<br />
											</span>
											<span className="timer-tip">
												Launch Cost: 1BNB= 120,000 Dream
											</span>
											<div className="input-container">
												<span>
													BNB Amount:
												</span>
												<input type="text" className="input-buy"></input>
												<ul className="outline-button buttons reset">
													<li><button className="btn-buy">Buy</button></li>
												</ul>
											</div>
											<span className="timer-tip-date">
												Launch Date: August 27th
											</span>

										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default () => {
	return (
		<UseWalletProvider
			chainId={42}
			connectors={{
				// This is how connectors get configured
				portis: { dAppId: 'my-dapp-id-123-xyz' }
			}}
		>
			<App />
		</UseWalletProvider>
	);
};
