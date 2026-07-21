/* ---- えいごモード データ(四択クイズ形式) ----
   history-data.js などと同じエンジンを使う。短文の中の1単語を英語に変える
   問題(JP→EN)と、英語が混じった短文の単語を日本語にする問題(EN→JP)の
   両方向を織り交ぜている。
   形式: { q: 問題文, choices: [4つの選択肢(0番目が正解)], answer: 0, meaning: 解説(省略可) } */
const ENGLISH_DATA = {
  1: [
    { q:'「私の犬はとても大きい。」の「犬」を表す英単語はどれ?', choices:['dog','cat','bird','fish'], answer:0, meaning:'dog = 犬' },
    { q:'「彼女は赤いリンゴを食べた。」の「赤い」を表す英単語はどれ?', choices:['red','blue','green','yellow'], answer:0, meaning:'red = 赤い' },
    { q:'「My cat is very cute.」の「cat」の意味に近い日本語はどれ?', choices:['猫','犬','鳥','魚'], answer:0, meaning:'cat = 猫' },
    { q:'「彼は毎朝パンを食べる。」の「パン」を表す英単語はどれ?', choices:['bread','rice','milk','egg'], answer:0, meaning:'bread = パン' },
    { q:'「The sun is very bright.」の「sun」の意味に近い日本語はどれ?', choices:['太陽','月','星','空'], answer:0, meaning:'sun = 太陽' },
    { q:'「私たちは学校に行く。」の「学校」を表す英単語はどれ?', choices:['school','house','park','station'], answer:0, meaning:'school = 学校' },
    { q:'「I have a small book.」の「book」の意味に近い日本語はどれ?', choices:['本','ペン','かばん','机'], answer:0, meaning:'book = 本' },
    { q:'「彼女は青い空を見た。」の「空」を表す英単語はどれ?', choices:['sky','sea','mountain','river'], answer:0, meaning:'sky = 空' },
    { q:'「My father is a teacher.」の「father」の意味に近い日本語はどれ?', choices:['父','母','兄','姉'], answer:0, meaning:'father = 父' },
    { q:'「私は水を飲みたい。」の「水」を表す英単語はどれ?', choices:['water','milk','juice','tea'], answer:0, meaning:'water = 水' }
  ],
  2: [
    { q:'「彼は毎日走る。」の「走る」を表す英単語はどれ?', choices:['run','walk','jump','swim'], answer:0, meaning:'run = 走る' },
    { q:'「I like to read books.」の「read」の意味に近い日本語はどれ?', choices:['読む','書く','見る','聞く'], answer:0, meaning:'read = 読む' },
    { q:'「彼女は歌うのが好きだ。」の「歌う」を表す英単語はどれ?', choices:['sing','dance','run','cook'], answer:0, meaning:'sing = 歌う' },
    { q:'「We play soccer every week.」の「play」の意味に近い日本語はどれ?', choices:['する・遊ぶ','見る','買う','作る'], answer:0, meaning:'play = する・遊ぶ' },
    { q:'「私は毎朝早く起きる。」の「起きる」を表す英単語はどれ?', choices:['wake up','sleep','eat','study'], answer:0, meaning:'wake up = 起きる' },
    { q:'「She can swim very fast.」の「swim」の意味に近い日本語はどれ?', choices:['泳ぐ','走る','飛ぶ','歩く'], answer:0, meaning:'swim = 泳ぐ' },
    { q:'「彼らは公園で遊んでいる。」の「公園」を表す英単語はどれ?', choices:['park','school','station','hospital'], answer:0, meaning:'park = 公園' },
    { q:'「I want to buy a new bag.」の「buy」の意味に近い日本語はどれ?', choices:['買う','売る','作る','借りる'], answer:0, meaning:'buy = 買う' },
    { q:'「彼女は毎日勉強する。」の「勉強する」を表す英単語はどれ?', choices:['study','play','sleep','cook'], answer:0, meaning:'study = 勉強する' },
    { q:'「He likes cooking dinner.」の「cooking」の意味に近い日本語はどれ?', choices:['料理する','食べる','洗う','掃除する'], answer:0, meaning:'cook = 料理する' }
  ],
  3: [
    { q:'「今日はとても暑い。」の「暑い」を表す英単語はどれ?', choices:['hot','cold','cool','warm'], answer:0, meaning:'hot = 暑い' },
    { q:'「She is very happy today.」の「happy」の意味に近い日本語はどれ?', choices:['うれしい','悲しい','怒っている','疲れている'], answer:0, meaning:'happy = うれしい' },
    { q:'「この問題はとても難しい。」の「難しい」を表す英単語はどれ?', choices:['difficult','easy','simple','fun'], answer:0, meaning:'difficult = 難しい' },
    { q:'「I am so tired now.」の「tired」の意味に近い日本語はどれ?', choices:['疲れた','元気な','眠い','忙しい'], answer:0, meaning:'tired = 疲れた' },
    { q:'「彼はとても親切だ。」の「親切」を表す英単語はどれ?', choices:['kind','angry','lazy','shy'], answer:0, meaning:'kind = 親切な' },
    { q:'「This cake is really delicious.」の「delicious」の意味に近い日本語はどれ?', choices:['おいしい','まずい','冷たい','熱い'], answer:0, meaning:'delicious = おいしい' },
    { q:'「その箱はとても重い。」の「重い」を表す英単語はどれ?', choices:['heavy','light','small','big'], answer:0, meaning:'heavy = 重い' },
    { q:'「The test was very easy.」の「easy」の意味に近い日本語はどれ?', choices:['簡単な','難しい','長い','短い'], answer:0, meaning:'easy = 簡単な' },
    { q:'「彼女はいつも忙しい。」の「忙しい」を表す英単語はどれ?', choices:['busy','free','lazy','quiet'], answer:0, meaning:'busy = 忙しい' },
    { q:'「He is a very famous singer.」の「famous」の意味に近い日本語はどれ?', choices:['有名な','静かな','新しい','古い'], answer:0, meaning:'famous = 有名な' }
  ],
  4: [
    { q:'「明日は雨が降るだろう。」の「雨」を表す英単語はどれ?', choices:['rain','snow','wind','cloud'], answer:0, meaning:'rain = 雨' },
    { q:'「Winter is my favorite season.」の「winter」の意味に近い日本語はどれ?', choices:['冬','夏','春','秋'], answer:0, meaning:'winter = 冬' },
    { q:'「私たちは来週テストがある。」の「テスト」を表す英単語はどれ?', choices:['test','homework','class','lesson'], answer:0, meaning:'test = テスト' },
    { q:'「I usually get up at seven.」の「usually」の意味に近い日本語はどれ?', choices:['たいてい','時々','いつも','めったに〜ない'], answer:0, meaning:'usually = たいてい' },
    { q:'「今日の天気はくもりだ。」の「くもり」を表す英単語はどれ?', choices:['cloudy','sunny','rainy','snowy'], answer:0, meaning:'cloudy = くもりの' },
    { q:'「She goes to bed early every night.」の「every night」の意味に近い日本語はどれ?', choices:['毎晩','毎朝','毎週','毎月'], answer:0, meaning:'every night = 毎晩' },
    { q:'「私の誕生日は8月だ。」の「誕生日」を表す英単語はどれ?', choices:['birthday','holiday','weekend','vacation'], answer:0, meaning:'birthday = 誕生日' },
    { q:'「We have a math class tomorrow.」の「tomorrow」の意味に近い日本語はどれ?', choices:['明日','今日','昨日','来週'], answer:0, meaning:'tomorrow = 明日' },
    { q:'「彼は毎週日曜日に教会へ行く。」の「日曜日」を表す英単語はどれ?', choices:['Sunday','Monday','Saturday','Friday'], answer:0, meaning:'Sunday = 日曜日' },
    { q:'「It is very cold in December.」の「December」の意味に近い日本語はどれ?', choices:['12月','1月','6月','9月'], answer:0, meaning:'December = 12月' }
  ],
  5: [
    { q:'「彼は頭が痛いと言った。」の「頭」を表す英単語はどれ?', choices:['head','hand','leg','stomach'], answer:0, meaning:'head = 頭' },
    { q:'「I have a stomachache today.」の「stomachache」の意味に近い日本語はどれ?', choices:['腹痛','頭痛','歯痛','発熱'], answer:0, meaning:'stomachache = 腹痛' },
    { q:'「医者は薬をくれた。」の「薬」を表す英単語はどれ?', choices:['medicine','food','water','doctor'], answer:0, meaning:'medicine = 薬' },
    { q:'「She caught a cold last week.」の「cold」の意味に近い日本語はどれ?', choices:['風邪','けが','熱','咳'], answer:0, meaning:'catch a cold = 風邪をひく' },
    { q:'「野菜をたくさん食べなさい。」の「野菜」を表す英単語はどれ?', choices:['vegetable','fruit','meat','fish'], answer:0, meaning:'vegetable = 野菜' },
    { q:'「He drinks a glass of milk every morning.」の「glass」の意味に近い日本語はどれ?', choices:['コップ・グラス','皿','スプーン','フォーク'], answer:0, meaning:'glass = コップ・グラス' },
    { q:'「私は毎日運動している。」の「運動」を表す英単語はどれ?', choices:['exercise','rest','sleep','work'], answer:0, meaning:'exercise = 運動' },
    { q:'「Please wash your hands before eating.」の「wash」の意味に近い日本語はどれ?', choices:['洗う','切る','焼く','混ぜる'], answer:0, meaning:'wash = 洗う' },
    { q:'「彼女は病院で働いている。」の「病院」を表す英単語はどれ?', choices:['hospital','school','library','bank'], answer:0, meaning:'hospital = 病院' },
    { q:'「He broke his leg during the game.」の「leg」の意味に近い日本語はどれ?', choices:['脚・足','腕','指','肩'], answer:0, meaning:'leg = 脚・足' }
  ],
  6: [
    { q:'「駅までの道を教えてください。」の「駅」を表す英単語はどれ?', choices:['station','airport','hotel','museum'], answer:0, meaning:'station = 駅' },
    { q:'「Turn left at the next corner.」の「left」の意味に近い日本語はどれ?', choices:['左','右','前','後ろ'], answer:0, meaning:'left = 左' },
    { q:'「このかばんはいくらですか。」の「いくら」を表す英単語はどれ?', choices:['how much','how many','how long','how old'], answer:0, meaning:'How much? = いくらですか' },
    { q:'「I would like to buy a ticket.」の「ticket」の意味に近い日本語はどれ?', choices:['切符・チケット','財布','地図','かばん'], answer:0, meaning:'ticket = 切符・チケット' },
    { q:'「空港までタクシーで行った。」の「空港」を表す英単語はどれ?', choices:['airport','station','port','hotel'], answer:0, meaning:'airport = 空港' },
    { q:'「We stayed at a nice hotel.」の「hotel」の意味に近い日本語はどれ?', choices:['ホテル','病院','学校','銀行'], answer:0, meaning:'hotel = ホテル' },
    { q:'「このバスは市役所に行きますか。」の「バス」を表す英単語はどれ?', choices:['bus','train','taxi','ship'], answer:0, meaning:'bus = バス' },
    { q:'「Could you show me the way to the museum?」の「museum」の意味に近い日本語はどれ?', choices:['博物館','図書館','公園','郵便局'], answer:0, meaning:'museum = 博物館' },
    { q:'「両替できる場所はどこですか。」の「両替」を表す英単語はどれ?', choices:['exchange','deposit','borrow','save'], answer:0, meaning:'exchange = 両替する' },
    { q:'「I lost my passport at the airport.」の「passport」の意味に近い日本語はどれ?', choices:['パスポート','財布','地図','時計'], answer:0, meaning:'passport = パスポート' }
  ],
  7: [
    { q:'「彼はその知らせに驚いた。」の「驚いた」を表す英単語はどれ?', choices:['surprised','bored','relieved','disappointed'], answer:0, meaning:'surprised = 驚いた' },
    { q:'「She felt nervous before the exam.」の「nervous」の意味に近い日本語はどれ?', choices:['緊張した','退屈な','安心した','誇らしい'], answer:0, meaning:'nervous = 緊張した' },
    { q:'「この決定はとても重要だ。」の「重要な」を表す英単語はどれ?', choices:['important','useless','common','simple'], answer:0, meaning:'important = 重要な' },
    { q:'「He was disappointed with the result.」の「disappointed」の意味に近い日本語はどれ?', choices:['がっかりした','満足した','興奮した','誇らしい'], answer:0, meaning:'disappointed = がっかりした' },
    { q:'「彼女はその映画にとても感動した。」の「感動した」を表す英単語はどれ?', choices:['moved','bored','angry','confused'], answer:0, meaning:'moved = 感動した' },
    { q:'「I am confident about my plan.」の「confident」の意味に近い日本語はどれ?', choices:['自信のある','心配な','疑わしい','恥ずかしい'], answer:0, meaning:'confident = 自信のある' },
    { q:'「彼らはその問題について議論した。」の「議論した」を表す英単語はどれ?', choices:['discussed','ignored','avoided','forgot'], answer:0, meaning:'discussed = 議論した' },
    { q:'「It is necessary to save energy.」の「necessary」の意味に近い日本語はどれ?', choices:['必要な','不可能な','危険な','無料の'], answer:0, meaning:'necessary = 必要な' },
    { q:'「その情報はとても役に立った。」の「役に立った」を表す英単語はどれ?', choices:['useful','useless','boring','difficult'], answer:0, meaning:'useful = 役に立つ' },
    { q:'「She was proud of her son.」の「proud」の意味に近い日本語はどれ?', choices:['誇りに思う','心配する','後悔する','疲れる'], answer:0, meaning:'proud = 誇りに思う' }
  ],
  8: [
    { q:'「彼は会社を経営している。」の「経営する」を表す英単語はどれ?', choices:['manage','destroy','ignore','follow'], answer:0, meaning:'manage = 経営する' },
    { q:'「The government announced a new policy.」の「government」の意味に近い日本語はどれ?', choices:['政府','会社','学校','病院'], answer:0, meaning:'government = 政府' },
    { q:'「環境を守ることが大切だ。」の「環境」を表す英単語はどれ?', choices:['environment','economy','culture','history'], answer:0, meaning:'environment = 環境' },
    { q:'「They signed an important contract.」の「contract」の意味に近い日本語はどれ?', choices:['契約','会議','報告','約束の破棄'], answer:0, meaning:'contract = 契約' },
    { q:'「彼女は大学で経済学を学んでいる。」の「経済学」を表す英単語はどれ?', choices:['economics','history','chemistry','literature'], answer:0, meaning:'economics = 経済学' },
    { q:'「The company increased its profit this year.」の「profit」の意味に近い日本語はどれ?', choices:['利益','損失','費用','給料'], answer:0, meaning:'profit = 利益' },
    { q:'「社会は急速に変化している。」の「社会」を表す英単語はどれ?', choices:['society','nature','science','culture'], answer:0, meaning:'society = 社会' },
    { q:'「We need to reduce plastic waste.」の「reduce」の意味に近い日本語はどれ?', choices:['減らす','増やす','集める','捨てる'], answer:0, meaning:'reduce = 減らす' },
    { q:'「彼は新しい技術を開発した。」の「開発した」を表す英単語はどれ?', choices:['developed','destroyed','sold','borrowed'], answer:0, meaning:'developed = 開発した' },
    { q:'「The population of this city is increasing.」の「population」の意味に近い日本語はどれ?', choices:['人口','面積','気候','産業'], answer:0, meaning:'population = 人口' }
  ],
  9: [
    { q:'「彼はその課題にすぐに取り組んだ。」の「取り組んだ」を表す英単語はどれ?', choices:['tackled','avoided','forgot','refused'], answer:0, meaning:'tackled = 取り組んだ' },
    { q:'「She accomplished her goal at last.」の「accomplished」の意味に近い日本語はどれ?', choices:['達成した','あきらめた','忘れた','拒否した'], answer:0, meaning:'accomplished = 達成した' },
    { q:'「彼らはその計画に反対した。」の「反対した」を表す英単語はどれ?', choices:['opposed','supported','ignored','proposed'], answer:0, meaning:'opposed = 反対した' },
    { q:'「The company faced a serious problem.」の「serious」の意味に近い日本語はどれ?', choices:['深刻な','簡単な','楽しい','一般的な'], answer:0, meaning:'serious = 深刻な' },
    { q:'「彼女はその状況に適応した。」の「適応した」を表す英単語はどれ?', choices:['adapted','rejected','forgot','escaped'], answer:0, meaning:'adapted = 適応した' },
    { q:'「He tends to avoid difficult situations.」の「avoid」の意味に近い日本語はどれ?', choices:['避ける','求める','楽しむ','解決する'], answer:0, meaning:'avoid = 避ける' },
    { q:'「その実験は予想外の結果をもたらした。」の「予想外の」を表す英単語はどれ?', choices:['unexpected','usual','planned','obvious'], answer:0, meaning:'unexpected = 予想外の' },
    { q:'「They eventually reached an agreement.」の「agreement」の意味に近い日本語はどれ?', choices:['合意','対立','誤解','拒否'], answer:0, meaning:'agreement = 合意' },
    { q:'「彼はその意見にかなり共感した。」の「共感した」を表す英単語はどれ?', choices:['sympathized','disagreed','ignored','criticized'], answer:0, meaning:'sympathized = 共感した' },
    { q:'「The new policy will affect many people.」の「affect」の意味に近い日本語はどれ?', choices:['影響を与える','無視する','説明する','禁止する'], answer:0, meaning:'affect = 影響を与える' }
  ],
  10: [
    { q:'「その理論は多くの研究者に支持されている。」の「支持されている」を表す英単語はどれ?', choices:['supported','rejected','ignored','doubted'], answer:0, meaning:'supported = 支持されている' },
    { q:'「The evidence strongly suggests his innocence.」の「evidence」の意味に近い日本語はどれ?', choices:['証拠','疑い','罰','判決'], answer:0, meaning:'evidence = 証拠' },
    { q:'「彼女はその主張に懐疑的だった。」の「懐疑的な」を表す英単語はどれ?', choices:['skeptical','confident','enthusiastic','indifferent'], answer:0, meaning:'skeptical = 懐疑的な' },
    { q:'「The negotiations remain complicated.」の「complicated」の意味に近い日本語はどれ?', choices:['複雑な','単純な','明白な','迅速な'], answer:0, meaning:'complicated = 複雑な' },
    { q:'「この現象は科学的に説明できる。」の「現象」を表す英単語はどれ?', choices:['phenomenon','theory','opinion','rumor'], answer:0, meaning:'phenomenon = 現象' },
    { q:'「Her contribution was highly appreciated.」の「contribution」の意味に近い日本語はどれ?', choices:['貢献','批判','誤解','妨害'], answer:0, meaning:'contribution = 貢献' },
    { q:'「彼はその困難を克服した。」の「克服した」を表す英単語はどれ?', choices:['overcame','caused','ignored','avoided'], answer:0, meaning:'overcame = 克服した' },
    { q:'「The committee reached a unanimous decision.」の「unanimous」の意味に近い日本語はどれ?', choices:['満場一致の','一部の','秘密の','一時的な'], answer:0, meaning:'unanimous = 満場一致の' },
    { q:'「その決定は将来に大きな影響を及ぼすだろう。」の「及ぼす」を表す英単語はどれ?', choices:['exert','avoid','ignore','cancel'], answer:0, meaning:'exert (an influence) = (影響を)及ぼす' },
    { q:'「The experiment was conducted under strict conditions.」の「conducted」の意味に近い日本語はどれ?', choices:['実施された','中止された','発見された','疑われた'], answer:0, meaning:'conducted = 実施された' }
  ]
};
