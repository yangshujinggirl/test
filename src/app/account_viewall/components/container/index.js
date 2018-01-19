import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Head from 'head';
import Icon from 'icon';//引入图标组件
import FooterNew from 'footerNew';//引入公共底部组件
import Button from 'button';//引入button组件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import LoginOver from 'loginOver';//引入登录超时组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,sessionUtil,urlUtil} from 'publicJs';

var isLogin=bussinessUtil.isLogin();//是否登录状态
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
var accountInfo;//用户信息
var userNum;//用户数量
var index=0;//加载次数
var source = urlUtil.getSearch('source');//从h5落地页注册成功进来
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      alert2Show: false,//是否实名默认不显示
      alert3Show: false,//是否绑卡框默认不显示
      alertRealShow:false,//实名弹框显示
      isLoading: true,//loading状态
      loginShow: false, //是否显示登录超时
    }
  }
  //组件渲染之前
	componentWillMount(){
		let pageName='account_viewall';
		let pageUrl=window.location.href;
		bussinessUtil.dealPage(pageName,pageUrl);
	}
  //组件完成加载
  componentDidMount(){
    //适配屏幕
    bussinessUtil.configScreen();
    if(isLogin){
      this.getData();
      this.getUserNum();
      // this.realNameShow();
      this.getUserInfo(sessionKey)
    }else{
      this.setState({isLoading:false});
    }
  }
  realNameShow() {
    if(source&&source!='') {
      this.setState({alertRealShow:true});
    }
  }
  //查询用户信息
  getUserInfo=(sessionKey)=>{
    let url=`/user/userInfo`;
    let param=`sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      bussinessUtil.updateUserInfo(data);
      if(!bussinessUtil.isRealname()){
        /**
         * 认证弹窗出现
         */
         //从落地页注册登录source进来进行实名校验
         if(source&&source!='') {
           this.setState({alertRealShow:true});
         }
      }
    }
    let errorCall=(data)=>{
      let error=dataUtil.getMessage(data.resultCode);
      this.updateText(error,true);//更新弹窗
    }
    let errorCall2=(e)=>{
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  //弹窗按钮1点击事件 暂不认证
  realbtn1Click=()=>{
    this.setState({alertRealShow:false});
  }

  //弹窗按钮2点击事件 去实名
  realbtn2Click=()=>{
    window.location.href='../user_realname/user_realname.html';
  }
  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
  /**
   * 马上登录
   * @return {[type]} [description]
   */
  goLogin=()=>{
    bussinessUtil.goLogin(window.location.href);
  }
  /**
   * 去设置页
   * @return {[type]} [description]
   */
  goSetting=()=>{
    if(isLogin){
      window.location.href='../user_install/user_install.html';
    }else{
      bussinessUtil.goLogin('/native/user_install/user_install.html');
    }
  }
  /**
   * 去安全保障页
   */
  goSafe=()=>{
    window.location.href='../set_safe/set_safe.html';
  }
  /**
   * 去下载页
   */
  // goDownload=()=>{
  //   window.location.href='../download_app/download_app.html';
  // }
  /**
   * 获取账户中心数据
   * @return {[type]} [description]
   */
  getData=()=>{
    let url=`/user/account/myAccount`;
    let param=`sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      /**
       * 更新用户账户中心数据
       */
      bussinessUtil.updateUserAccountInfo(data);
      accountInfo=data.data;
      if(index==1){
        this.setState({isLoading: false});
      }else{
        index++;
      }
    }
    let errorCall=(data)=>{
      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true,isLoading:false});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
          this.updateText(error,true);//更新弹窗
        }
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  /**
   * 获取登录用户的数据
   * @return {[type]} [description]
   */
  getUserNum=()=>{
    let url=`/user/account/myAccountAffiliated`;
    let param=`sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      /**
       * 更新用户账户中心数据
       */
      userNum=strUtil.formatData(data.data);
      if(index==1){
        this.setState({isLoading: false});
      }else{
        index++;
      }
    }
    let errorCall=(data)=>{

      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true,isLoading:false});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
          this.updateText(error,true);//更新弹窗
        }
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  /**
   * 去充值页面
   * @return {[type]} [description]
   */
  goRecharge=()=>{
    bussinessUtil.setCurrentPage();
    bussinessUtil.dealPage('recharge','/native/recharge/recharge.html',this.realnameCall,this.cardCall);
  }
  /**
   * 未实名回调
   * @return {[type]} [description]
   */
  realnameCall=()=>{
    this.setState({alert2Show:true});
  }
  /**
   * 未绑卡回调
   * @return {[type]} [description]
   */
  cardCall=()=>{
    this.setState({alert3Show:true});
  }
  /**
   * 取消实名
   * @return {[type]} [description]
   */
  realnameAlertClick1=()=>{
    this.setState({alert2Show:false});
  }
  /**
   * 去实名
   * @return {[type]} [description]
   */
  realnameAlertClick2=()=>{
    bussinessUtil.goRealname('/native/recharge/recharge.html');
  }
  /**
   * 取消绑卡
   * @return {[type]} [description]
   */
  cardAlertClick1=()=>{
    this.setState({alert3Show:false});
  }
  /**
   * 去绑卡
   * @return {[type]} [description]
   */
  cardAlertClick2=()=>{
    bussinessUtil.setCurrentPage();
    bussinessUtil.goCard('/native/withdraw/withdraw.html');
  }
  /**
   * 去提现页面
   * @return {[type]} [description]
   */
  goWithDraw=()=>{
    bussinessUtil.dealPage('withdraw','/native/withdraw/withdraw.html',this.realnameCall,this.cardCall);
  }
  /**
   * 去我的投资
   * @return {[type]} [description]
   */
  goAccountInvest=()=>{
    window.location.href='../account_invest/account_invest.html';
  }

  /**
   * 去理财金券
   */
  goSecurity=()=>{
    window.location.href='../account_security/account_security.html';
  }

  render(){
    let login;
    let dealLogin=()=>{
      if(isLogin){
        if(!(this.state.isLoading)){
        let dealData=()=>{
          if(strUtil.isEmpty(accountInfo)){
            return <div></div>
          }else{
            return(
              <div>
                <div className="viewall-top">
                  <div className="viewall-login">
                    <div className="loginState">
                      <div className="gains">
                        <div className="item">{strUtil.formatKilo(strUtil.formatData(accountInfo.collectRevenue))}</div>
                        <div className="filed">待收收益（元）</div>
                      </div>
                      <div className="buttons">
                        <button className="recharge" onClick={this.goRecharge}>充值</button>
                        <button className="postal" onClick={this.goWithDraw}>提现</button>
                      </div>
                      <div className="assets">
                            <div className="assets-item">
                              <div className="num">{strUtil.formatKilo(strUtil.formatData(accountInfo.totalAsset))}</div>
                              <div className="value">总资产(元)</div>
                            </div>
                            <div className="assets-item">
                              <div className="num">{strUtil.formatKilo(strUtil.formatData(accountInfo.usableBalance))}</div>
                              <div className="value">可用余额(元)</div>
                            </div>
                            <div className="assets-item teshu">
                              <div className="num">{strUtil.formatKilo(strUtil.formatData(accountInfo.birdCoin))}</div>
                              <div className="value">可用鸟币</div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="investment" onClick={this.goAccountInvest}>
                    <div className="product-icon three"></div>
                    <div className="felid">我的投资</div>
                    <div className="prod">已投 <span className="product-num">{strUtil.formatData(userNum.myOrder)}</span> 个产品</div>
                  </div>
                  <div className="security" onClick={this.goSecurity}>
                    <div className="product-icon five"></div>
                    <div className="felid">理财金券</div>
                    <div className="prod special">共 <span className="product-num">{strUtil.formatData(userNum.myCoupons)}</span> 张可用</div>
                  </div>
                </div>
              </div>
            )
          }
        }
        let data=dealData();
        login=
          <div>
            {data}
          </div>
        }
      }
    }
    dealLogin();
    let account;
    let dealAccount=()=>{
      if(this.state.isLoading){
         account=
           <div>
             <Loading loading={this.state.isLoading} />
             <Alert text={this.state.alertText} show={this.state.alertShow} />
           </div>
      }else{
        account=
          <div className="account_viewall">
            { login }
            <div className="viewall-list">
              <ul>
                <li onClick={this.goSafe}>
                  <Icon iconType='safe' iconCss='icon-type' />
                  <span>安全保障</span>
                  <span className="list-icon"></span>
                </li>
                <li className="set" onClick={this.goSetting}>
                  <Icon iconType='set' iconCss='icon' />
                  <span>设置</span>
                  <span className="list-icon"></span>
                </li>
              </ul>
            </div>
            <FooterNew type="3"/>
            <Alert text={this.state.alertText} show={this.state.alertShow} />
            <Alert  type='2'
              show={this.state.alert2Show}
              title=''
              btn1Text='取消'
              btn2Text='下一步'
              btn1Click={this.realnameAlertClick1}
              btn2Click={this.realnameAlertClick2}>
             <p className='alert-content'>您未完成用户实名认证,为了您的资金安全,请进行认证!</p>
            </Alert>
            <Alert  type='2'
              show={this.state.alert3Show}
              title=''
              btn1Text='取消'
              btn2Text='下一步'
              btn1Click={this.cardAlertClick1}
              btn2Click={this.cardAlertClick2}>
             <p className='alert-content'>绑定银行卡后方可进行充值投资,要不绑一张试试?</p>
            </Alert>
            <Alert  type='3'  show={this.state.alertRealShow}
             btn1Text='取消' btn2Text='去开通'
             btn1Click={this.realbtn1Click}  btn2Click={this.realbtn2Click}>
               <img src='../image/common/alertRealname_bg.png'></img>
            </Alert>
            <LoginOver type='2' show={this.state.loginShow} />
          </div>
      }
    }
    dealAccount();
    return(
      <div className="account-viewall-content">
        <Head />
        { account }
      </div>
    )
  }
}
