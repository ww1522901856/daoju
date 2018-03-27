SET NAMES UTF8;
DROP DATABASE IF EXISTS daoju;
CREATE DATABASE daoju CHARSET=UTF8;
USE daoju;
#创建用户表
CREATE TABLE daoju_user(
	uid   INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) UNIQUE NOT NULL DEFAULT '',
    upwd  VARCHAR(32) NOT NULL DEFAULT '',
    phone VARCHAR(15) NOT NULL DEFAULT '',
    email VARCHAR(50),
    user_name VARCHAR(32),
    avatar VARCHAR(128),
    gender INT
);
INSERT INTO daoju_user VALUES
(NULL,'1522901856','123456','15972394524','152@qq.com','王稳','img/logo.png',1),
(NULL,'123456','123456','1851543154','152@qq.com','齐天大圣','img/logo.png',1),
(NULL,'15221','123456','15966664524','152@qq.com','王大剑','img/logo.png',2),
(NULL,'152292','123456','15975554524','152@qq.com','王二剑','img/logo.png',1),
(NULL,'15229','123456','15972394524','152@qq.com','王大','img/logo.png',2),
(NULL,'12345','123456','1851543154','152@qq.com','齐天圣','img/logo.png',1),
(NULL,'1522222','123456','15966664524','152@qq.com','王剑','img/logo.png',1),
(NULL,'152293','123456','15975554524','152@qq.com','王三剑','img/logo.png',2),
(NULL,'1522901','123456','15972394524','152@qq.com','王四','img/logo.png',1),
(NULL,'1234561','123456','1851543154','152@qq.com','齐圣','img/logo.png',1),
(NULL,'152225','123456','15966664524','152@qq.com','王的剑','img/logo.png',2),
(NULL,'1522935','123456','15975554524','152@qq.com','王五剑','img/logo.png',1),
(NULL,'15229018','123456','15972394524','152@qq.com','王第三打','img/logo.png',2),
(NULL,'1234562','123456','1851543154','152@qq.com','天大圣','img/logo.png',1),
(NULL,'1522574','123456','15966664524','152@qq.com','王对剑','img/logo.png',2),
(NULL,'15229955','123456','15975554524','152@qq.com','王六剑','img/logo.png',1),
(NULL,'152290186','123456','15972394524','152@qq.com','王是的撒','img/logo.png',2),
(NULL,'12345641','123456','1851543154','152@qq.com','齐天大','img/logo.png',1),
(NULL,'1522852','123456','15966664524','152@qq.com','王第三打剑','img/logo.png',2),
(NULL,'15229798','123456','15975554524','152@qq.com','王速度剑','img/logo.png',1),
(NULL,'15229452','123456','15972394524','152@qq.com','王第三打','img/logo.png',2),
(NULL,'12345652','123456','1851543154','152@qq.com','齐天','img/logo.png',1),
(NULL,'1522666','123456','15966664524','152@qq.com','王器剑','img/logo.png',2),
(NULL,'15229777','123456','15975554524','152@qq.com','王七剑','img/logo.png',1);

#创建广告轮播表
CREATE TABLE daoju_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
INSERT INTO daoju_index_carousel VALUES
(NULL,'img/20180123152256_607702.jpg','穿越火线王牌交易员','NUll'),
(NULL,'img/20180118154345_561999.jpg','英雄联盟周边喜迎新春','NUll'),
(NULL,'img/20180122163629_758341.jpg','地下城与勇士腊八节活动','NUll'),
(NULL,'img/20180125110517_868708.jpg','逆战新春福袋派对','NUll'),
(NULL,'img/20180126114847_585991.jpg','极品飞车OL双色幸运夺宝二期','NUll');

#创建主页热卖推荐表
CREATE TABLE daoju_index_remai(
	rid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	family_id INT,
	title VARCHAR(64),
	img VARCHAR(128),
	gamename VARCHAR(64),
	price DECIMAL(10,2),
	yuanjia DECIMAL(10,2)
);
INSERT INTO daoju_index_remai VALUES
(NULL,'products_details.html?lid=1','1','驯龙炮手 崔丝塔娜','img/20151208171230_76029.jpg','英雄联盟','49.50','99.00'),
(NULL,'products_details.html?lid=1','1','鲜血领主 弗拉基米','img/724.jpg','英雄联盟','64.50','129.00'),
(NULL,'products_details.html?lid=1','2','78800CF点','img/20160815_24622_9225.jpg','穿越火线','468.00','788.00'),
(NULL,'products_details.html?lid=1','2','10000CF点','img/20160912_20776_5997.jpg','穿越火线','30.00','100.00'),
(NULL,'products_details.html?lid=1','2','5000CF点','img/20160912_20775_2961.jpg','穿越火线','15.00','50.00'),
(NULL,'products_details.html?lid=1','1','武神 贾克斯','img/2-24013-9.jpg','英雄联盟','79.00','99.00'),
(NULL,'products_details.html?lid=1','3','阳炎SA58(30天)','img/2-24013-9.jpg','战地之王','20.00','30.00'),
(NULL,'products_details.html?lid=1','1','胜利经验卡(10胜)','img/boosts_10.jpg','英雄联盟','29.00','29.00'),
(NULL,'products_details.html?lid=1','1','双倍金币卡(3日)','img/boosts_1.jpg','英雄联盟','22.00','22.00'),
(NULL,'products_details.html?lid=1','1','高丽风情 阿狸','img/103001.jpg','英雄联盟','10.00','10.00'),
(NULL,'products_details.html?lid=1','1','战地机甲 斯卡纳','img/zhandijijiasikana190.jpg','英雄联盟','34.50','35.00'),
(NULL,'products_details.html?lid=1','1','黑色荆棘 莫甘娜','img/658.jpg','英雄联盟','69.00','70.00');

#创建主页商品表
CREATE TABLE daoju_product_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(64)
);
INSERT INTO daoju_product_family VALUES
(1,'英雄联盟'),
(2,'穿越火线'),
(3,'剑灵'),
(4,'御龙在天');

#创建主页广告图表
CREATE TABLE daoju_index_guanggaoone(
	gid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	img VARCHAR(128),
	title VARCHAR(64)
);
INSERT INTO daoju_index_guanggaoone VALUES
(NULL,NULl,'img/20180104094528_187097.jpg','穿越火线王者轮回'),
(NULL,NULl,'img/20180119142930_487189.jpg','QQ炫舞全新银墨灰羽'),
(NULL,NULl,'img/20171226151134_833336.jpg','逆战影舞忍道'),
(NULL,NULl,'img/20180118120657_765642.jpg','FIFAOL3神秘商店'),
(NULL,NULl,'img/20171228160925_313675.jpg','QQ飞车品成都冒菜'),
(NULL,NULl,'img/20180108142628_508121.jpg','穿越火线王牌幸运星'),
(NULL,NULl,'img/20150529214548_631138.jpg','聚豆商城2.0版本重磅开启'),
(NULL,NULl,'img/20170728172416_963637.jpg','掌上道聚城游戏礼包上线'),
(NULL,NULl,'img/20160226162551_787265.jpg','英雄联盟生日祝福');

#创建主页lol商品列表
CREATE TABLE daoju_index_product(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	href VARCHAR(128),
	title VARCHAR(64),
	vxprice DECIMAL(10,2),
	price DECIMAL(10,2),
	img VARCHAR(128)
);
INSERT INTO daoju_index_product VALUES
(NULL,1,'products_details.html?lid=1','武神 贾克斯','75.05','79.00','img/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=1','源计划：净化 薇恩','94.05','99.00','img/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=1','源计划：升华 烬','75.05','79.00','img/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=1','未来战士 凯特琳','94.05','99.00','img/pkg-8150.jpg'),
(NULL,1,'products_details.html?lid=1','赛博潮流 左伊','65.55','69.00','img/2-142001-9.jpg'),
(NULL,1,'products_details.html?lid=1','死兆星 卡特兹','75.05','79.00','img/2-121004-9-r839.jpg'),
(NULL,1,'products_details.html?lid=1','黎明使者 锐雯','94.05','99.00','img/2-92016-9.jpg'),
(NULL,1,'products_details.html?lid=1','黑夜使者 亚索','94.05','99.00','img/2-157009-9.jpg'),
(NULL,1,'products_details.html?lid=1','未来战士 凯特琳','94.05','99.00','img/pkg-8150.jpg'),
(NULL,1,'products_details.html?lid=1','源计划：雷','75.05','79.00','img/236006.jpg'),
(NULL,1,'products_details.html?lid=1'L,'源计划：联合','94.05','99.00','img/20160801_24071_7135.jpg'),
(NULL,1,'products_details.html?lid=1','灌篮高手 德莱厄斯','65.05','69.00','img/122004.jpg'),
(NULL,1,'products_details.html?lid=1','腥红之月 亚索','75.05','79.00','img/157003_190.jpg'),
(NULL,2,NULL,'C4工具钳(30天)','4.75','5.00','img/9000005301.jpg'),
(NULL,2,NULL,'赛事专用包','66.50','70.00','img/saishi.jpg'),
(NULL,2,NULL,'战队徽章显示道具','4.75','5.00','img/125zhanduihuizhangxianshidaoju.jpg'),
(NULL,2,NULL,'彩色昵称(30天)','9.50','10.00','img/9000040201.jpg'),
(NULL,2,NULL,'4号背包(30天)','4.75','5.00','img/153_4haobeibao.jpg'),
(NULL,2,NULL,'防具促销包(7天)','15.20','16.00','img/9010000603.jpg'),
(NULL,2,NULL,'清除中途退场记录','4.75','5.00','img/9000032001.jpg'),
(NULL,2,NULL,'修改昵称','14.25','15.00','img/9000000101.jpg'),
(NULL,2,NULL,'修改昵称','14.25','15.00','img/9000000101.jpg'),
(NULL,2,NULL,'10000CF点','30.00','100.00','img/20160912_20776_5997.jpg'),
(NULL,2,NULL,'5000CF点','15.00','50.00','img/157003_190.jpg'),
(NULL,2,NULL,'78800CF点','468.00','788.00','img/20160815_24622_9225.jpg'),
(NULL,2,NULL,'复仇道具卡(30)','5.05','9.00','img/157003_190.jpg'),
(NULL,3,NULL,'墨龙宝物箱(50个)','98.88','99.00','img/1-2026010-1-r784.jpg'),
(NULL,3,NULL,'天乾武魂神物','12.50','13.00','img/1-2026261-1-r499.jpg'),
(NULL,3,NULL,'天乾宝玉神物','2.50','2.50','img/1-2026259-1-r257.jpg'),
(NULL,3,NULL,'天乾守护石神物','3.00','3.00','img/1-2026260-1-r156.jpg'),
(NULL,3,NULL,'璨夜月华服装包','29.55','30.00','img/1-2026734-1-r955.jpg'),
(NULL,3,NULL,'暗夜之枪','208.88','210.00','img/pkg-9052.jpg'),
(NULL,3,NULL,'朝霞之枪','208.88','210.00','img/pkg-8716.jpg'),
(NULL,3,NULL,'50级角色创建券','98.88','99.00','img/20170221_28900_7197.jpg'),
(NULL,3,NULL,'百年雪莲露(1个)','0.30','0.30','img/2080036.jpg'),
(NULL,3,NULL,'凝神香(100)','4.60','4.60','img/190-2023909.jpg'),
(NULL,3,NULL,'炽热白青封印','19.88','19.88','img/2021844.jpg'),
(NULL,3,NULL,'破天宝玉神物','25.00','25.00','img/2024646-190.jpg'),
(NULL,3,NULL,'破天魂神物(100)','20.00','20.00','img/1-2024164-10-s5119.jpg'),
(NULL,4,NULL,'完美淬炼宝石','70.00','70.00','img/170007.jpg'),
(NULL,4,NULL,'1.25倍经验丹','0.20','0.20','img/111460.jpg'),
(NULL,4,NULL,'红宝石','99.05','99.00','img/131136.jpg'),
(NULL,4,NULL,'三等青瓷','7.20','7.00','img/131204.jpg'),
(NULL,4,NULL,'四等凤雏石','26.88','26.00','img/904131013.jpg'),
(NULL,4,NULL,'四等保底星移符','48.55','48.00','img/904131011.jpg'),
(NULL,4,NULL,'强化水晶','4.00','4.00','img/131288.jpg'),
(NULL,4,NULL,'高等淬炼宝石','9.90','9.99','img/170003.jpg'),
(NULL,4,NULL,'一等青瓷','0.45','0.45','img/131205.jpg'),
(NULL,4,NULL,'三等青瓷','7.20','7.20','img/131205.jpg'),
(NULL,4,NULL,'二等青瓷','1.80','1.80','img/131205.jpg'),
(NULL,4,NULL,'飞升符','0.20','0.20','img/110287.jpg'),
(NULL,4,NULL,'一等前朝古币','0.15','0.15','img/131195.jpg');


#lol商品列表轮播
CREATE TABLE daoju_lol_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
INSERT INTO daoju_lol_carousel VALUES
(NULL,'img2/20180118154345_561999.jpg','英雄联盟周边喜迎新春','NUll'),
(NULL,'img2/20180130110304_330179.jpg','英雄联盟粉色萝莉神秘礼物','NUll'),
(NULL,'img2/20180202102545_915628.jpg','英雄联盟安妮皮肤','NUll'),
(NULL,'img2/20180119155725_528090.jpg','英雄联盟武圣贾克斯','NUll');

#lol热门商品列表
CREATE TABLE daoju_lol_remen(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	href VARCHAR(128),
	title VARCHAR(64),
	vxprice DECIMAL(10,2),
	price DECIMAL(10,2),
	img VARCHAR(128)
);
INSERT INTO daoju_lol_remen VALUES
(NULL,1,'products_details.html?lid=1','腥红之月 烬','75.05','79.00','img2/20170216_28862_2202.jpg'),
(NULL,1,'products_details.html?lid=1','屠龙勇士 赵信','75.05','79.00','img2/20170315_0_5169.jpg'),
(NULL,1,'products_details.html?lid=1','死亡绽放 卡兹克','65.05','69.00','img2/121003_190.jpg'),
(NULL,1,'products_details.html?lid=1','泳池派对','47.50','49.50','img2/20150715220820_82148.jpg'),
(NULL,1,'products_details.html?lid=1','胜利经验卡(10胜)','20.90','29.00','img2/boosts_10.jpg'),
(NULL,1,'products_details.html?lid=1','双倍金币卡(3日)','20.90','22.00','img2/boosts_1.jpg'),
(NULL,1,'products_details.html?lid=1','战地机甲 斯卡纳','32.77','34.50','img2/zhandijijiasikana190.jpg'),
(NULL,1,'products_details.html?lid=1','高丽风情 阿狸','9.50','10.00','img2/103001.jpg');

#lol商品列表
CREATE TABLE daoju_lol_product(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	href VARCHAR(128),
	title VARCHAR(64),
	vxprice DECIMAL(10,2),
	price DECIMAL(10,2),
	img VARCHAR(128)
);
INSERT INTO daoju_lol_product VALUES
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#####################

(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),

(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),

(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),

(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg'),
#
(NULL,1,'products_details.html?lid=1','小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg'),
(NULL,1,'products_details.html?lid=2','冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg'),
(NULL,1,'products_details.html?lid=3','安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg'),
(NULL,1,'products_details.html?lid=4','武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg'),
(NULL,1,'products_details.html?lid=5','源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg'),
(NULL,1,'products_details.html?lid=6','源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg'),
(NULL,1,'products_details.html?lid=7','小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg'),
(NULL,1,'products_details.html?lid=8','源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg');


#周边商城
CREATE TABLE daoju_zhoubian(
	zid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	title VARCHAR(128),
	price DECIMAL(10,2),
	img VARCHAR(128)
);
INSERT INTO daoju_zhoubian VALUES
(NULL,NULL,'洛与霞手链情侣套装（经典款）','520.00','img2/20180118115812_47346.jpg'),
(NULL,NULL,'提伯斯熊 毛绒玩偶 粉色限定款','180.00','img2/20180118095940_89439.jpg'),
(NULL,NULL,'电玩战魂 赫卡里姆 手办','150.00','img2/20170731091021_21396.jpg'),
(NULL,NULL,'疾风剑豪 亚索 T恤（男女同款）','120.00','img2/20170627102836_99692.jpg');
#火爆活动
CREATE TABLE daoju_huodong(
	hid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	title VARCHAR(128),
	date VARCHAR(128),
	jdate VARCHAR(128),
	zan INT,
	img VARCHAR(128)
);
INSERT INTO daoju_huodong VALUES
(NULL,NULL,'春节集卡活动','2018-02-05','2018-02-25','2222','img2/697251155200685.jpg'),
(NULL,NULL,'战争学院的荣耀','2018-02-05','2018-02-25','2222','img2/812261515528470.jpg'),
(NULL,NULL,'粉色萝莉神秘礼物','2018-02-05','2018-02-25','2222','img2/941751083316573.jpg');

#lol商品详情表
CREATE TABLE daoju_product_details(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	title VARCHAR(128),	
	vxprice DECIMAL(10,2),
	price DECIMAL(10,2),
	img VARCHAR(128),
	video VARCHAR(128)
);
INSERT INTO daoju_product_details VALUES
(NULL,1,'小红帽 安妮','9.50','10.00','img2/2-1002-9.jpg','img4/video1.png'),
(NULL,1,'冰霜烈焰 安妮','9.50','94.05','img2/2-1005-9.jpg','img4/video1.png'),
(NULL,1,'安伯斯与提妮 安妮','42.75','45.00','img2/2-1006-9.jpg','img4/video1.png'),
(NULL,1,'武神 贾克斯','75.05','79.00','img2/2-24013-9.jpg','img4/video1.png'),
(NULL,1,'源计划：净化 薇恩','94.05','99.00','img2/2-67011-9.jpg','img4/video1.png'),
(NULL,1,'源计划：升华 烬','75.05','79.00','img2/2-202004-9.jpg','img4/video1.png'),
(NULL,1,'小红帽 安妮','4.75','5.00','img2/2-1008-9.jpg','img4/video1.png'),
(NULL,1,'源计划：裁决 蔚','75.05','79.00','img2/2-111005-9.jpg','img4/video1.png');


CREATE TABLE daoju_cart(
	iid INT PRIMARY KEY AUTO_INCREMENT,
	user_id int(11),
	product_id int(11),
	count int(11),
	is_checked tinyint(1)
);
insert into daoju_cart values
(null,2,1,1,1),
(null,2,2,1,1),
(null,2,4,1,1),
(null,2,5,1,1),
(null,2,6,1,1),
(null,2,3,1,1);
CREATE TABLE daoju_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	tu_id int(11),
	img VARCHAR(128)
);
insert into daoju_pic values
(null,1,"img4/xiaohongmao190.jpg"),
(null,2,"img4/xiaohongmao190.jpg"),
(null,3,"img4/xiaohongmao190.jpg"),
(null,4,"img4/2-24013-9.jpg"),
(null,5,"img4/2-67011-9.jpg"),
(null,6,"img4/2-202004-9.jpg"),
(null,7,"img4/2-1008-9.jpg"),
(null,8,"img4/2-202004-9.jpg");
