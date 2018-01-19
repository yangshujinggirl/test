import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件

//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
	//组件完成加载
	componentDidMount(){

	} 


	render(){

		return(
			<div className="serveProtocol">
				<h1 className="head">用户服务协议</h1>
				<p className="it">
					领投鸟理财平台由上海吾悠互联网金融信息服务有限公司（以下称“本平台”均指领投鸟理财平台及上海吾悠互联网金融信息服务有限公司）负责运营。在注册成为本平台用户前请您务必仔细阅读如下服务条款，特别是其中所涉及的免除及限制本平台责任的条款、对用户权利限制条款等。一旦您点选“注册”并注册成功后，视为您已经充分理解和同意本服务协议全部内容，并签署了本服务协议，本服务协议立即在您与本平台之间产生合同法律效力，您注册使用本平台的全部活动将受到本服务协议的约束并承担相应的责任和义务。如您不同意本服务协议内容，请停止注册使用本平台。
				</p>
				<div className="one">
					<h2 className="head1">一、用户注册及使用限制</h2>
					<div className="item">
						<p className="it">1.&nbsp;&nbsp;本平台注册人应当同时具备如下条件：</p>
						<div>
							<p className="it">1.1&nbsp;&nbsp;个人客户条件：</p>
							<div>
								<p className="it">
								（1）持有中华人民共和国法律认可有效身份证明的18周岁以上的自然人；
								</p>
								<p className="it">
								（2）具有中华人民共和国法律规定的完全民事行为能力的自然人；
								</p>
								<p className="it">
								（3）在中华人民共和国境内（不含港澳台地区）商业银行开立并有效持有个人借记卡账户。
								</p>
							</div>
						</div>
						<div>
							<p className="it">1.2&nbsp;&nbsp;企业法人或其他机构条件：</p>
							<div>
								<p className="it">
								（1）依照中华人民共和国法律设立并合法存续的境内法人企业；
								</p>
								<p className="it">
								（2）如不符合以上条件的，请勿注册使用本平台。如发现客户不具有本协议约定资格的，本平台保留中止或终止用户身份的权利。
								</p>
							</div>
						</div>
					</div>
					<div className="item">
							<p className="it">
								2.&nbsp;&nbsp;本协议内容包括以下条款及本平台已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的一部分，与协议正文具有同等法律效力。本协议是用户与本平台共同签订的，适用于用户在本平台的全部活动。用户承诺遵守中国的各类法律规定，如有违反而导致任何法律后果的发生，用户将以自己的名义独立承担所有相应的法律责任。
							</p>
					</div>
					<div className="item">
							<p className="it">
								3.&nbsp;&nbsp;本平台有权根据法律法规变化或者实际需要修改本协议或根据本协议制定、修改各类具体规则并在本平台相关系统板块发布，无需另行单独通知用户。用户确认，且应不时地注意本协议及具体规则的变更，若用户在本协议及具体规则内容公告变更后继续使用本服务的，表示用户已充分阅读、理解并接受修改后的协议和具体规则内容，也将遵循修改后的协议和具体规则使用本网站的服务；同时就用户在协议和具体规则修订前通过本平台进行的交易及其效力，视为用户已同意并已按照本协议及有关规则进行了相应的授权和追认。若用户不同意修改后的协议内容，用户应停止使用本平台的服务。
							</p>
					</div>
				</div>
				<div className="two">
					<h2 className="head1">二、 服务内容</h2>
					<div className="item">
						<p className="it">
							1.&nbsp;&nbsp;本平台提供的服务包括但不限于：投融资居间服务（包括审核融资项目、信息发布等）、签订和查阅协议、预约购买、资金充值、提现、代收、代付等，具体以本平台当时提供的服务内容为准。
						</p>
						<p className="it">
							2.&nbsp;&nbsp;本平台可以根据平台运行和交易安全的实际需要，暂停提供、限制或改变本平台服务的部分功能，或者新增服务功能。在任何功能减少、变化或增加时，只要用户仍然使用本平台的服务，表示用户仍然同意本协议或者变更后的协议。
						</p>
						<p className="it">
							3．&nbsp;&nbsp;用户知晓，由本平台与第三方支付机构合作为用户提供资金管理服务，包括但不限于账户管理、资金清结算、充值、提现、转账、认证、短信服务等；一经用户在本平台注册成功并绑定银行账户即为本人开通第三方支付机构虚拟账户，视为用户确认且同意在第三方支付机构开通其个人账户用于在本平台活动的一切资金管理，同时表示不可撤销地授权本平台根据用户指令进行相关操作，且该等操作是不可逆转的，用户不能以任何理由拒绝付款或要求取消交易。
						</p>
						<p className="it">
							4．&nbsp;&nbsp;用户同意且确认，用户按照本平台相关服务流程在本平台上所确认的交易状态将成为用户进行相关交易或操作（包括但不限于冻结资金、代为支付或收取款项、订立合同等）的明确指令，本平台有权依据本协议和/或有关文件和规则按用户做出相关指令对相关事项进行处理。如用户未能及时对交易状态进行确认、修改、撤销或未能提交相关申请所引起的任何纠纷或损失须由用户本人负责，本平台不负任何责任。
						</p>
					</div>
				</div>
				<div className="three">
					<h2 className="head1">三、交易及资金管理</h2>
					<div className="item">
						<p className="it">
							1.&nbsp;&nbsp;用户注册后，可以自行或授权代理人根据本平台有关规则和说明，通过本平台确认签署有关协议并经本平台审核通过后实现投资（投资方式包括但不限于向借款人直接投资、购买理财产品或受让债权等形式）。详细操作规则及方式请见有关协议及本平台相关页面的规则和说明。
						</p>
						<p className="it">
							2.&nbsp;&nbsp;本平台将为用户的投资、回收等交易提供服务，并在服务过程中根据有关文件、协议和/或本平台相关页面的规则、说明等收取必要的服务或管理费用，其具体内容、比例、金额等事项请参见有关文件及本网站相关页面的规则和说明（包括但不限于，如用户每一笔成功转让的债权，本平台有权基于用户所转让债权的金额向用户收取一定比例的转让管理费等款项作为服务费用，具体比例及金额等请参见本平台的债权转让相关规则和说明）。用户同意，本平台有权调整前述服务或管理费用的类型或金额等具体事项并根据本协议和相关规则进行公告、修改。
						</p>
						<p className="it">
							3．&nbsp;&nbsp;用户在本平台的投资收益应自行承担税费。本平台不承担任何代扣代缴的义务及责任。
						</p>
						<p className="it">
							4．&nbsp;&nbsp;如果本平台发现因系统故障发生的处理错误，本平台有权根据本协议规定通知用户后纠正该错误。用户理解并同意，因本平台处理错误而发生多付或少付的款项均不计利息的配合本平台退回多付的（按照本平台指示返还不当得利或从用户平台账户及绑定的银行账户扣划不当得利款项）或收回少付的。
						</p>
						<p className="it">
							5．&nbsp;&nbsp;用户保证并承诺通过本平台进行交易的资金来源合法。用户同意，本平台有权按照包括但不限于公安机关、检察机关、法院等司法机关、行政机关、军事机关的要求协助对用户的账户及资金等进行查询、冻结或扣划等操作。
						</p>
					</div>
				</div>
				<div className="four">
					<h2 className="head1">四、免责声明</h2>
					<div className="item">
						<p className="it">
							1.&nbsp;&nbsp;用户在做出交易决策前，应全面了解相关交易，谨慎决策，并自行承担全部风险。因用户自身的原因导致的任何损失或责任，由用户自行负责，本平台不承担责任。包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、用户使用的系统被第三方侵入、用户委托他人代理交易时他人恶意或不当操作、银行卡使用不当原因而造成的各项损失。
						</p>
						<p className="it">
							2.&nbsp;&nbsp;用户如发现有第三人盗用用户的账户及密码，或其他任何未经合法授权的情形，应立即以有效方式通知本平台，要求本平台暂时关闭相关服务，否则由此产生的一切责任由用户本人承担。同时，用户应理解本平台对用户的请求采取行动需要合理期限，在此之前，本平台对第三人使用该服务所导致的损失不承担任何责任。
						</p>
						<p className="it">
							3．&nbsp;&nbsp;用户了解并认可，任何通过本平台进行的交易并不能避免风险的产生，本平台不能也没有义务为风险负责，包括但不限于有关法律法规等政策变化、其他交易方的违约风险、市场利率的变化、不可抗力等风险。
						</p>
						<p className="it">
							4．&nbsp;&nbsp;受第三方支付机构可能仅在工作日进行资金代扣及划转的现状等各种原因所限，本平台不对第三方支付机构提供服务的资金到账时间做任何承诺，也不承担与此相关的责任，包括但不限于由此产生的利息、货币贬值等损失。
						</p>
						<p className="it">
							5．&nbsp;&nbsp;用户了解，本平台有权基于交易安全等方面的考虑不时设定涉及交易的相关事项，包括但不限于交易限额、交易次数等，并对此没有异议。
						</p>
						<p className="it">
							6．&nbsp;&nbsp;在任何情况下，对于用户使用本平台服务过程中涉及由第三方提供相关服务的责任由该第三方承担，本网站不承担该等责任。因用户自身的原因导致本平台服务无法提供或提供时发生任何错误而产生的任何损失或责任，由用户自行负责，本平台不负责任。
						</p>
					</div>
				</div>
				<div className="five">
					<h2 className="head1">五、知识产权</h2>
					<div className="item">
						<p className="it">
							1.&nbsp;&nbsp;本平台中的所有内容均属于本平台所有,包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片、音频、视频及其他全部信息。本平台内容受中国知识产权法律法规及各国际版权公约的保护。
						</p>
						<p className="it">
							2.&nbsp;&nbsp;未经本平台书面同意，用户不得以任何形式复制、模仿、传播、出版、公布、展示本平台内容。用户承认本平台内容是属于本平台的财产。任何未经授权对本平台内容的使用均属于违法行为，本平台有权追究用户的法律责任。
						</p>
					</div>
				</div>
				<div className="six">
					<h2 className="head1">六、用户信息及隐私保护</h2>
					<div className="item">
						<p className="it">
							1.&nbsp;&nbsp;用户信息的使用与披露
						</p>
						<div>
							<p className="it">
								1.1&nbsp;&nbsp;用户有义务在注册时提供自己的真实资料，并保证诸如电子邮件地址、联系电话、联系地址等内容的有效性、安全性和及时更新，以便本平台为用户提供服务并与用户进行及时、有效的联系。用户理解并愿意承担因通过前述联系方式无法与用户取得联系而导致的用户在使用本服务过程中遭受的任何损失或增加任何费用等不利后果。
							</p>
							<p className="it">
								1.2&nbsp;&nbsp;用户同意本平台可以自行或通过合作的第三方机构对用户提交或本平台搜集的用户信息（包括但不限于用户的个人身份证信息等）进行核实，并对获得的核实结果根据本协议及有关文件进行查看、使用和留存等操作。
							</p>
							<p className="it">
							1.3&nbsp;&nbsp;本平台按照用户在本平台上的行为自动追踪关于用户的某些资料，并利用这些资料进行为更好地服务客户之目的，进行投资兴趣及投资风险偏好的内部分析研究。</p>
						</div>
					</div>
					<div className="item">
						<p className="it">
							2.&nbsp;&nbsp;用户信息的使用
						</p>
						<div>
							<p className="it">
								2.1&nbsp;&nbsp;用户同意本平台可使用用户的个人资料（包括但不限于本平台持有的用户提交的的资料，以及从用户在本平台上的活动中所获取的其他资料）以解决争议或纠纷。
							</p>
							<p className="it">
								2.2&nbsp;&nbsp;用户同意本平台可以使用用户的个人资料以改进本平台的推广、营销等服务，从而使用户在使用本平台服务时得到更为顺利、安全、高效的交易体验。
							</p>
							<p className="it">
								2.3&nbsp;&nbsp;用户同意本平台利用用户的资料向用户推送针对用户兴趣的信息，如产品广告条、行政管理方面的通讯等。
							</p>
							<p className="it">
								2.4&nbsp;&nbsp;本平台对于用户提供的、自行收集到的、经认证的个人信息将按照本协议及有关规则予以保护，但因技术限制问题，本平台不能确保用户的个人信息不会通过本协议中未列明的途径泄露出去。
							</p>
							<p className="it">
								2.5&nbsp;&nbsp;用户使用本平台服务进行交易时，即授权本平台将用户的包括但不限于真实姓名、联系方式、信用状况等必要的个人信息和交易信息披露给为向用户提供服务而合作的机构。
							</p>
						</div>
					</div>
				</div>
				<div className="seven">
					<h2 className="head1">七、协议终止</h2>
					<p className="it">
						除非本平台终止本协议或者用户申请终止本协议及注销相应用户账户且经本平台同意，否则本协议自用户点选同意并注册用户起始终有效。在用户违反了相关法律法规或本协议及相关规则情况下，本平台有权通过站内信、电子邮件通知等方式终止本协议、关闭用户账户或者限制使用。但本平台的终止行为不能免除用户在本平台上生成的协议项下的应履行而未履行的义务。
					</p>
				</div>
				<div className="eight">
					<h2 className="head1">八、通知</h2>
					<p className="it">
						1.本协议项下本平台对于用户所有的通知均可通过网页公告、电子邮件、手机短信等方式进行。该等通知于发送之日视为已送达收件人。
					</p>
					<p className="it">
						2.用户对于本平台的通知应当通过本平台对外正式公布的通信地址、传真号码、电子邮箱等联系信息进行送达。
					</p>
				</div>
				<div className="nine">
					<h2 className="head1">九、适用法律和管辖</h2>
					<p className="it">
						本协议签订地为上海市徐汇区，因本平台所提供服务而产生的争议均适用中华人民共和国法律，并由协议签订地人民法院管辖。
					</p>
				</div>
				<div className="ten">
					<h2 className="head1">十、其他</h2>
					<p className="it">
						1．若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效。
					</p>
					<p className="it">
						2．本平台对本协议享有最终的解释权。
					</p>
				</div>
			</div>
		)

	}
}