function parse_data(data) {
  var date1 = [];
  var series1 = [
    { name: "song1", values: [] },
    { name: "song2", values: [] },
    { name: "song3", values: [] },
    { name: "song4", values: [] },
    { name: "song5", values: [] },
  ];

  for (var k in data) {
    var elem = data[k];
    date1.push(k);
    series1[0].values.push(parseInt(elem.song1)/1000000);
    series1[1].values.push(parseInt(elem.song2)/1000000);
    series1[2].values.push(parseInt(elem.song3)/1000000);
    series1[3].values.push(parseInt(elem.song4)/1000000);
    series1[4].values.push(parseInt(elem.song5)/1000000);
  }

  let data2 = {
    y: "Values",
    series: series1,
    dates: date1,
  };
  return data2;
}
function get_data(i) {
  if (i == 1) {
    let data1=[];
    for (let i=0;i<20;i++){
      let obj={
        Year:1800+2*i,
        var1: Math.floor(Math.random() * 20),
        var2: Math.floor(Math.random() * 30),
        var3: Math.floor(Math.random() * 10),
        var4: Math.floor(Math.random() * 40),
        var5: Math.floor(Math.random() * 30),
      }
      data1.push(obj)

    }
    var date1 = [];
    var series1 = [
      { name: "var1", values: [] },
      { name: "var2", values: [] },
      { name: "var3", values: [] },
      { name: "var4", values: [] },
      { name: "var5", values: [] },
    ];

    for (var k in data1) {
      var elem = data1[k];
      date1.push(elem.Year);
      series1[0].values.push(elem.var1);
      series1[1].values.push(elem.var2);
      series1[2].values.push(elem.var3);
      series1[3].values.push(elem.var4);
      series1[4].values.push(elem.var5);
    }

    var data = {
      y: "Values",
      series: series1,
      dates: date1,
    };
    return data;
  }
  else {
    var data2;
    var d = [
      { date: '2017-04-07', song1: 13042637, song2: 6533680.0, song3: 9736931.0, song4: 8055220.0, song5: 317011.0 }, { date: '2017-04-08', song1: 12815920, song2: 6660608.0, song3: 9334494.0, song4: 7280150.0, song5: 308838.0 }, { date: '2017-04-09', song1: 11291392, song2: 5683746.0, song3: 8077875.0, song4: 6396104.0, song5: 756145.0 }, { date: '2017-04-10', song1: 11819128, song2: 5762588.0, song3: 8678774.0, song4: 7162611.0, song5: 954504.0 }, { date: '2017-04-11', song1: 11736951, song2: 5877897.0, song3: 8591469.0, song4: 7468021.0, song5: 953037.0 }, { date: '2017-04-12', song1: 11716914, song2: 6041766.0, song3: 8590463.0, song4: 7495873.0, song5: 972755.0 }, { date: '2017-04-13', song1: 11958775, song2: 6327822.0, song3: 8553816.0, song4: 7573209.0, song5: 1047409.0 }, { date: '2017-04-14', song1: 11443718, song2: 5846681.0, song3: 8048741.0, song4: 13144962.0, song5: 1124587.0 }, { date: '2017-04-15', song1: 11042206, song2: 5617332.0, song3: 7450464.0, song4: 11963789.0, song5: 1181031.0 }, { date: '2017-04-16', song1: 10010095, song2: 5108739.0, song3: 6713215.0, song4: 10040949.0, song5: 1200146.0 }, { date: '2017-04-17', song1: 10765545, song2: 10236693.0, song3: 7481411.0, song4: 11302669.0, song5: 1469013.0 }, { date: '2017-04-18', song1: 11003682, song2: 13837155.0, song3: 7720202.0, song4: 11967713.0, song5: 1699884.0 }, { date: '2017-04-19', song1: 10766018, song2: 14530591.0, song3: 7608793.0, song4: 11640174.0, song5: 1725940.0 }, { date: '2017-04-20', song1: 10826572, song2: 15603034.0, song3: 7578070.0, song4: 11181908.0, song5: 1820033.0 }, { date: '2017-04-21', song1: 11324112, song2: 18076042.0, song3: 7818554.0, song4: 11363409.0, song5: 1953608.0 }, { date: '2017-04-22', song1: 11234996, song2: 17750769.0, song3: 7449324.0, song4: 10274500.0, song5: 1890190.0 }, { date: '2017-04-23', song1: 9744436, song2: 15592441.0, song3: 6498748.0, song4: 8892731.0, song5: 1696541.0 }, { date: '2017-04-24', song1: 10226555, song2: 17174198.0, song3: 7108710.0, song4: 10131992.0, song5: 1976553.0 }, { date: '2017-04-25', song1: 10416529, song2: 17794232.0, song3: 7215107.0, song4: 10156513.0, song5: 2105738.0 }, { date: '2017-04-26', song1: 10483469, song2: 18053510.0, song3: 7252547.0, song4: 10145977.0, song5: 2620606.0 }, { date: '2017-04-27', song1: 10222461, song2: 18150660.0, song3: 7135760.0, song4: 10016786.0, song5: 2698186.0 }, { date: '2017-04-28', song1: 10818508, song2: 20021846.0, song3: 7545200.0, song4: 10309105.0, song5: 3028343.0 }, { date: '2017-04-29', song1: 10836688, song2: 20266973.0, song3: 7228232.0, song4: 9535829.0, song5: 3191729.0 }, { date: '2017-04-30', song1: 9754326, song2: 18406851.0, song3: 6545783.0, song4: 8415625.0, song5: 2971223.0 }, { date: '2017-05-01', song1: 9593805, song2: 18367645.0, song3: 6596730.0, song4: 8737383.0, song5: 3253665.0 }, { date: '2017-05-02', song1: 9706051, song2: 18955297.0, song3: 6846097.0, song4: 9192670.0, song5: 3619296.0 }, { date: '2017-05-03', song1: 9888519, song2: 19322294.0, song3: 6931541.0, song4: 9233418.0, song5: 3759408.0 }, { date: '2017-05-04', song1: 9934971, song2: 19505497.0, song3: 6935114.0, song4: 9207136.0, song5: 3855119.0 }, { date: '2017-05-05', song1: 10520138, song2: 21169157.0, song3: 7238272.0, song4: 9526065.0, song5: 4112038.0 }, { date: '2017-05-06', song1: 10555302, song2: 21096685.0, song3: 6959582.0, song4: 8935434.0, song5: 4025107.0 }, { date: '2017-05-07', song1: 9168672, song2: 17895091.0, song3: 6075220.0, song4: 7805942.0, song5: 3598374.0 }, { date: '2017-05-08', song1: 9483810, song2: 19068836.0, song3: 6592512.0, song4: 8576556.0, song5: 4168044.0 }, { date: '2017-05-09', song1: 9701644, song2: 19772336.0, song3: 6686915.0, song4: 8830985.0, song5: 4408268.0 }, { date: '2017-05-10', song1: 9675779, song2: 19848833.0, song3: 6653322.0, song4: 8746830.0, song5: 4488334.0 }, { date: '2017-05-11', song1: 9560953, song2: 20017122.0, song3: 6658910.0, song4: 8689326.0, song5: 4339295.0 }, { date: '2017-05-12', song1: 10105739, song2: 21542862.0, song3: 7013481.0, song4: 9077519.0, song5: 4523770.0 }, { date: '2017-05-13', song1: 10077677, song2: 21606277.0, song3: 6678893.0, song4: 8683478.0, song5: 4308062.0 }, { date: '2017-05-14', song1: 8671832, song2: 18556585.0, song3: 5758414.0, song4: 7511379.0, song5: 3845575.0 }, { date: '2017-05-15', song1: 9081859, song2: 19750988.0, song3: 6283248.0, song4: 8281634.0, song5: 4441224.0 }, { date: '2017-05-16', song1: 9374428, song2: 20324830.0, song3: 6344965.0, song4: 8538806.0, song5: 4709739.0 }, { date: '2017-05-17', song1: 9287237, song2: 20380605.0, song3: 6017925.0, song4: 8454767.0, song5: 4795563.0 }, { date: '2017-05-18', song1: 9162677, song2: 20967686.0, song3: 5836777.0, song4: 8431003.0, song5: 5096004.0 }, { date: '2017-05-19', song1: 9687373, song2: 22169945.0, song3: 6103377.0, song4: 8762806.0, song5: 5292576.0 }, { date: '2017-05-20', song1: 9587491, song2: 22271168.0, song3: 5882114.0, song4: 8239957.0, song5: 5032800.0 }, { date: '2017-05-21', song1: 8099936, song2: 19291804.0, song3: 5144732.0, song4: 7214077.0, song5: 4512437.0 }, { date: '2017-05-22', song1: 8306796, song2: 19990671.0, song3: 5526221.0, song4: 7757136.0, song5: 4997624.0 }, { date: '2017-05-23', song1: 8482709, song2: 20206249.0, song3: 5583887.0, song4: 7963927.0, song5: 5109260.0 }, { date: '2017-05-24', song1: 8689525, song2: 21098792.0, song3: 5753065.0, song4: 8060525.0, song5: 5310612.0 }, { date: '2017-05-25', song1: 8745570, song2: 21620119.0, song3: 5779886.0, song4: 8039395.0, song5: 5385823.0 }, { date: '2017-05-26', song1: 9285005, song2: 23218183.0, song3: 6101814.0, song4: 8318984.0, song5: 5579455.0 }, { date: '2017-05-27', song1: 8968725, song2: 22744894.0, song3: 5699766.0, song4: 7708217.0, song5: 5189684.0 }, { date: '2017-05-28', song1: 7797390, song2: 19682193.0, song3: 5021231.0, song4: 6799333.0, song5: 4722146.0 }, { date: '2017-05-29', song1: 7968074, song2: 19119391.0, song3: 5251779.0, song4: 6956411.0, song5: 4963030.0 }, { date: '2017-06-01', song1: 8270321, song2: 20697677.0, song3: 5495998.0, song4: 7364896.0, song5: 5738504.0 }, { date: '2017-06-03', song1: 8383160, song2: 21339194.0, song3: 5264998.0, song4: 7138376.0, song5: 5700860.0 }, { date: '2017-06-04', song1: 7292429, song2: 18317216.0, song3: 4665442.0, song4: 6308290.0, song5: 5056728.0 }, { date: '2017-06-05', song1: 7564274, song2: 18579274.0, song3: 5213153.0, song4: 6612172.0, song5: 5536914.0 }, { date: '2017-06-06', song1: 7733799, song2: 18831975.0, song3: 5317735.0, song4: 6844215.0, song5: 5794155.0 }, { date: '2017-06-07', song1: 7991347, song2: 19089132.0, song3: 5401157.0, song4: 6972281.0, song5: 6040520.0 }, { date: '2017-06-08', song1: 8038934, song2: 19146578.0, song3: 5359403.0, song4: 6893265.0, song5: 6103138.0 }, { date: '2017-06-09', song1: 8347951, song2: 20414015.0, song3: 5555463.0, song4: 7130699.0, song5: 6435133.0 }, { date: '2017-06-10', song1: 8294822, song2: 20814279.0, song3: 5298619.0, song4: 6876924.0, song5: 6317618.0 }, { date: '2017-06-11', song1: 7209910, song2: 18061777.0, song3: 4655866.0, song4: 6170861.0, song5: 5633437.0 }, { date: '2017-06-12', song1: 7471696, song2: 18016294.0, song3: 4983829.0, song4: 6516012.0, song5: 6132437.0 }, { date: '2017-06-13', song1: 7649602, song2: 18247619.0, song3: 5096237.0, song4: 6618499.0, song5: 6296232.0 }, { date: '2017-06-14', song1: 7791397, song2: 18796844.0, song3: 5230213.0, song4: 6699187.0, song5: 6529679.0 }, { date: '2017-06-15', song1: 7788117, song2: 18859909.0, song3: 5240236.0, song4: 6658054.0, song5: 6539428.0 }, { date: '2017-06-16', song1: 8108408, song2: 19658830.0, song3: 5431826.0, song4: 6783439.0, song5: 6671912.0 }, { date: '2017-06-17', song1: 8124731, song2: 20358876.0, song3: 5254454.0, song4: 6512488.0, song5: 6661705.0 }, { date: '2017-06-18', song1: 7062291, song2: 17669708.0, song3: 4607159.0, song4: 5697471.0, song5: 5919580.0 }, { date: '2017-06-19', song1: 7222278, song2: 17678927.0, song3: 4899566.0, song4: 6109417.0, song5: 6479657.0 }, { date: '2017-06-20', song1: 7322216, song2: 18072968.0, song3: 4945979.0, song4: 6226739.0, song5: 6650204.0 }, { date: '2017-06-21', song1: 7320808, song2: 18266517.0, song3: 4991918.0, song4: 6114166.0, song5: 6649982.0 }, { date: '2017-06-22', song1: 7414811, song2: 18516324.0, song3: 5028154.0, song4: 5836170.0, song5: 6676589.0 }, { date: '2017-06-23', song1: 7790331, song2: 19704628.0, song3: 5221599.0, song4: 5787698.0, song5: 6760113.0 }, { date: '2017-06-24', song1: 7435279, song2: 19027255.0, song3: 4808014.0, song4: 5356980.0, song5: 6406220.0 }, { date: '2017-06-25', song1: 6464995, song2: 16317670.0, song3: 4245668.0, song4: 4784760.0, song5: 5672986.0 }, { date: '2017-06-26', song1: 6899036, song2: 16833985.0, song3: 4719520.0, song4: 5159169.0, song5: 6457472.0 }, { date: '2017-06-27', song1: 6956048, song2: 16828321.0, song3: 4756455.0, song4: 5233342.0, song5: 6561576.0 }, { date: '2017-06-28', song1: 6948876, song2: 16755069.0, song3: 4733774.0, song4: 5219358.0, song5: 6600259.0 }, { date: '2017-06-29', song1: 6979147, song2: 16738208.0, song3: 4737784.0, song4: 5264616.0, song5: 6668812.0 }, { date: '2017-06-30', song1: 7418266, song2: 18016506.0, song3: 5002806.0, song4: 5414745.0, song5: 6964822.0 }, { date: '2017-07-01', song1: 7286405, song2: 18100043.0, song3: 4774843.0, song4: 5089295.0, song5: 6686994.0 }, { date: '2017-07-02', song1: 6291781, song2: 15459004.0, song3: 4141816.0, song4: 4470802.0, song5: 5843136.0 }, { date: '2017-07-03', song1: 6658379, song2: 15717350.0, song3: 4513399.0, song4: 4725057.0, song5: 6316964.0 }, { date: '2017-07-04', song1: 6945239, song2: 16216181.0, song3: 4842624.0, song4: 4695211.0, song5: 6438641.0 }, { date: '2017-07-05', song1: 6889862, song2: 16234560.0, song3: 4787127.0, song4: 4665841.0, song5: 6618288.0 }, { date: '2017-07-06', song1: 6864039, song2: 16341451.0, song3: 4714461.0, song4: 4733036.0, song5: 6734873.0 }, { date: '2017-07-07', song1: 7165776, song2: 17408778.0, song3: 4938822.0, song4: 4890511.0, song5: 6971756.0 }, { date: '2017-07-08', song1: 7083965, song2: 17434310.0, song3: 4676309.0, song4: 4604028.0, song5: 6775806.0 }, { date: '2017-07-09', song1: 6192566, song2: 15209922.0, song3: 4113499.0, song4: 4138663.0, song5: 6030924.0 }, { date: '2017-07-10', song1: 6545599, song2: 15436463.0, song3: 4457975.0, song4: 4396545.0, song5: 6502623.0 }, { date: '2017-07-11', song1: 6591634, song2: 15492198.0, song3: 4481153.0, song4: 4435075.0, song5: 6655153.0 }, { date: '2017-07-12', song1: 6604220, song2: 15471584.0, song3: 4527169.0, song4: 4393344.0, song5: 6735165.0 }, { date: '2017-07-13', song1: 6670011, song2: 15702710.0, song3: 4555915.0, song4: 4417653.0, song5: 6889203.0 }, { date: '2017-07-14', song1: 6873986, song2: 16471127.0, song3: 4727981.0, song4: 4588352.0, song5: 7428439.0 }, { date: '2017-07-15', song1: 6675732, song2: 16549098.0, song3: 4480897.0, song4: 4426203.0, song5: 7286421.0 }, { date: '2017-07-16', song1: 5780812, song2: 14158281.0, song3: 3878012.0, song4: 3949880.0, song5: 6540054.0 }, { date: '2017-07-17', song1: 6270412, song2: 14458210.0, song3: 4215697.0, song4: 4218110.0, song5: 7202114.0 }, { date: '2017-07-18', song1: 6332080, song2: 14445760.0, song3: 4235126.0, song4: 4252510.0, song5: 7442837.0 }, { date: '2017-07-19', song1: 6321482, song2: 14533247.0, song3: 4198519.0, song4: 4216456.0, song5: 7383549.0 }, { date: '2017-07-20', song1: 6345232, song2: 14574866.0, song3: 4196855.0, song4: 4221129.0, song5: 7317581.0 }, { date: '2017-07-21', song1: 6584434, song2: 15290172.0, song3: 4324180.0, song4: 4340508.0, song5: 7483165.0 }, { date: '2017-07-22', song1: 6419125, song2: 15081889.0, song3: 4128746.0, song4: 4087726.0, song5: 7272876.0 }, { date: '2017-07-23', song1: 5593737, song2: 12900257.0, song3: 3592715.0, song4: 3673824.0, song5: 6372850.0 }, { date: '2017-07-24', song1: 5971241, song2: 12947182.0, song3: 3898377.0, song4: 3920478.0, song5: 6976951.0 }, { date: '2017-07-25', song1: 6084365, song2: 13083960.0, song3: 3966279.0, song4: 4057663.0, song5: 7142650.0 }, { date: '2017-07-26', song1: 6036253, song2: 12992407.0, song3: 3942363.0, song4: 4044913.0, song5: 7193455.0 }, { date: '2017-07-27', song1: 6136793, song2: 13000596.0, song3: 4011774.0, song4: 4071007.0, song5: 7238086.0 }, { date: '2017-07-28', song1: 6392647, song2: 13759811.0, song3: 4177788.0, song4: 4204291.0, song5: 7430381.0 }, { date: '2017-07-29', song1: 6219539, song2: 13667396.0, song3: 3980576.0, song4: 4049163.0, song5: 7177577.0 }, { date: '2017-07-30', song1: 5438809, song2: 11842229.0, song3: 3485531.0, song4: 3603193.0, song5: 6310817.0 }, { date: '2017-07-31', song1: 5807756, song2: 11996903.0, song3: 3831588.0, song4: 3832712.0, song5: 6861903.0 }, { date: '2017-08-01', song1: 5837671, song2: 12037931.0, song3: 3873641.0, song4: 3910393.0, song5: 6980911.0 }, { date: '2017-08-02', song1: 5816421, song2: 11974849.0, song3: 3835236.0, song4: 3893299.0, song5: 7002895.0 }, { date: '2017-08-03', song1: 5813934, song2: 11925165.0, song3: 3809888.0, song4: 3903153.0, song5: 7056852.0 }, { date: '2017-08-04', song1: 6007623, song2: 12565919.0, song3: 3952948.0, song4: 4034865.0, song5: 7272132.0 }, { date: '2017-08-05', song1: 5853156, song2: 12595568.0, song3: 3762743.0, song4: 3845196.0, song5: 7013793.0 }, { date: '2017-08-06', song1: 5161329, song2: 10971045.0, song3: 3303766.0, song4: 3429417.0, song5: 6148053.0 }, { date: '2017-08-07', song1: 5463623, song2: 11038928.0, song3: 3601600.0, song4: 3620249.0, song5: 6558849.0 }, { date: '2017-08-08', song1: 5503197, song2: 11026134.0, song3: 3617536.0, song4: 3737388.0, song5: 6646539.0 }, { date: '2017-08-09', song1: 5577100, song2: 11072469.0, song3: 3679142.0, song4: 3810186.0, song5: 6775658.0 }, { date: '2017-08-10', song1: 5609356, song2: 11077073.0, song3: 3704051.0, song4: 3861148.0, song5: 6834501.0 }, { date: '2017-08-11', song1: 5821842, song2: 11682964.0, song3: 3826441.0, song4: 3952534.0, song5: 7010525.0 }, { date: '2017-08-12', song1: 5690637, song2: 11541402.0, song3: 3608592.0, song4: 3756727.0, song5: 6727197.0 }, { date: '2017-08-13', song1: 5048734, song2: 10162818.0, song3: 3227925.0, song4: 3386920.0, song5: 6007073.0 }, { date: '2017-08-14', song1: 5356407, song2: 10227207.0, song3: 3458670.0, song4: 3596980.0, song5: 6522976.0 }, { date: '2017-08-15', song1: 5324014, song2: 10117908.0, song3: 3441392.0, song4: 3626772.0, song5: 6599419.0 }, { date: '2017-08-16', song1: 5340468, song2: 10112353.0, song3: 3428613.0, song4: 3667274.0, song5: 6702959.0 }, { date: '2017-08-17', song1: 5354799, song2: 10078390.0, song3: 3388205.0, song4: 3673307.0, song5: 6728231.0 }, { date: '2017-08-18', song1: 5612592, song2: 10632098.0, song3: 3514567.0, song4: 3788165.0, song5: 6917995.0 }, { date: '2017-08-19', song1: 5521995, song2: 10745228.0, song3: 3330789.0, song4: 3631568.0, song5: 6714150.0 }, { date: '2017-08-20', song1: 4877951, song2: 9347543.0, song3: 2930431.0, song4: 3250541.0, song5: 5971170.0 }, { date: '2017-08-21', song1: 5053891, song2: 9190645.0, song3: 3137077.0, song4: 3362878.0, song5: 6324038.0 }, { date: '2017-08-22', song1: 5190960, song2: 9345758.0, song3: 3220089.0, song4: 3525272.0, song5: 6557427.0 }, { date: '2017-08-23', song1: 5213331, song2: 9291811.0, song3: 3247528.0, song4: 3538478.0, song5: 6594554.0 }, { date: '2017-08-24', song1: 5192733, song2: 9112136.0, song3: 3200638.0, song4: 3593733.0, song5: 6629096.0 }, { date: '2017-08-25', song1: 5372132, song2: 9604864.0, song3: 3297845.0, song4: 3728981.0, song5: 6919821.0 }, { date: '2017-08-26', song1: 5398407, song2: 9830691.0, song3: 3177570.0, song4: 3707354.0, song5: 6735165.0 }, { date: '2017-08-27', song1: 4639412, song2: 8211357.0, song3: 2708561.0, song4: 3241394.0, song5: 5697007.0 }, { date: '2017-08-28', song1: 5052322, song2: 8245177.0, song3: 2965292.0, song4: 3805542.0, song5: 6155840.0 }, { date: '2017-08-29', song1: 5069208, song2: 8326055.0, song3: 3047201.0, song4: 3840230.0, song5: 6312760.0 }, { date: '2017-08-30', song1: 5073099, song2: 8289340.0, song3: 3098976.0, song4: 3811893.0, song5: 6261844.0 }, { date: '2017-08-31', song1: 5004209, song2: 8220587.0, song3: 3081615.0, song4: 3763414.0, song5: 6270509.0 }, { date: '2017-09-01', song1: 5211297, song2: 8851183.0, song3: 3220023.0, song4: 3899350.0, song5: 6555770.0 }, { date: '2017-09-02', song1: 5184822, song2: 8855437.0, song3: 3063769.0, song4: 3649317.0, song5: 6234713.0 }, { date: '2017-09-03', song1: 4565886, song2: 7634595.0, song3: 2706883.0, song4: 3242651.0, song5: 5455643.0 }, { date: '2017-09-04', song1: 4707435, song2: 7493172.0, song3: 2888297.0, song4: 3398290.0, song5: 5809396.0 }, { date: '2017-09-05', song1: 4695639, song2: 7304888.0, song3: 2881964.0, song4: 3429361.0, song5: 5888354.0 }, { date: '2017-09-06', song1: 4760158, song2: 7274460.0, song3: 2899870.0, song4: 3455123.0, song5: 5964207.0 }, { date: '2017-09-07', song1: 4826109, song2: 7319295.0, song3: 2872544.0, song4: 3503719.0, song5: 5976230.0 }, { date: '2017-09-08', song1: 4910246, song2: 7615512.0, song3: 2926563.0, song4: 3628067.0, song5: 6153565.0 }, { date: '2017-09-09', song1: 4811154, song2: 7678972.0, song3: 2788193.0, song4: 3444938.0, song5: 5887824.0 }, { date: '2017-09-10', song1: 4198795, song2: 6611073.0, song3: 2457214.0, song4: 3035355.0, song5: 5163668.0 }, { date: '2017-09-11', song1: 4361981, song2: 6438665.0, song3: 2634210.0, song4: 3219538.0, song5: 5567003.0 }, { date: '2017-09-12', song1: 4449059, song2: 6485427.0, song3: 2693230.0, song4: 3339749.0, song5: 5768113.0 }, { date: '2017-09-13', song1: 4486914, song2: 6372277.0, song3: 2730972.0, song4: 3362267.0, song5: 5813366.0 }, { date: '2017-09-14', song1: 4625412, song2: 6392424.0, song3: 2789158.0, song4: 3427588.0, song5: 5842846.0 }, { date: '2017-09-15', song1: 4857453, song2: 6897461.0, song3: 2897776.0, song4: 3588348.0, song5: 6085964.0 }, { date: '2017-09-16', song1: 4811542, song2: 7115121.0, song3: 2775660.0, song4: 3437075.0, song5: 5875577.0 }, { date: '2017-09-17', song1: 4217726, song2: 6217801.0, song3: 2411478.0, song4: 3022022.0, song5: 5050812.0 }, { date: '2017-09-18', song1: 4438039, song2: 6079504.0, song3: 2589228.0, song4: 3223558.0, song5: 5394894.0 }, { date: '2017-09-19', song1: 4449027, song2: 5845989.0, song3: 2605795.0, song4: 3318253.0, song5: 5498925.0 }, { date: '2017-09-20', song1: 4450117, song2: 5696752.0, song3: 2620766.0, song4: 3333215.0, song5: 5573412.0 }, { date: '2017-09-21', song1: 4511416, song2: 5804669.0, song3: 2662157.0, song4: 3377269.0, song5: 5632846.0 }, { date: '2017-09-22', song1: 4803446, song2: 6287200.0, song3: 2795011.0, song4: 3550018.0, song5: 5836533.0 }, { date: '2017-09-23', song1: 4811273, song2: 6457167.0, song3: 2697447.0, song4: 3361464.0, song5: 5588322.0 }, { date: '2017-09-24', song1: 4173114, song2: 5543199.0, song3: 2386744.0, song4: 2973071.0, song5: 4928772.0 }, { date: '2017-09-25', song1: 4300493, song2: 5294767.0, song3: 2532344.0, song4: 3142953.0, song5: 5246747.0 }, { date: '2017-09-26', song1: 4382561, song2: 5328387.0, song3: 2584103.0, song4: 3245227.0, song5: 5323218.0 }, { date: '2017-09-27', song1: 4432205, song2: 5405673.0, song3: 2626524.0, song4: 3310160.0, song5: 5369976.0 }, { date: '2017-09-28', song1: 4407021, song2: 5451463.0, song3: 2651182.0, song4: 3371796.0, song5: 5380140.0 }, { date: '2017-09-29', song1: 4612169, song2: 5887270.0, song3: 2805798.0, song4: 3408516.0, song5: 5622105.0 }, { date: '2017-09-30', song1: 4528232, song2: 5934154.0, song3: 2644431.0, song4: 3179287.0, song5: 5469318.0 }, { date: '2017-10-01', song1: 3909551, song2: 5047240.0, song3: 2310057.0, song4: 2787820.0, song5: 4669591.0 }, { date: '2017-10-02', song1: 4127122, song2: 4914458.0, song3: 2488921.0, song4: 3009934.0, song5: 5031324.0 }, { date: '2017-10-03', song1: 4237114, song2: 4800023.0, song3: 2546028.0, song4: 3127029.0, song5: 5154154.0 }, { date: '2017-10-04', song1: 4271413, song2: 4817960.0, song3: 2572763.0, song4: 3144219.0, song5: 5069708.0 }, { date: '2017-10-05', song1: 4245407, song2: 5017664.0, song3: 2567514.0, song4: 3173822.0, song5: 4804623.0 }, { date: '2017-10-06', song1: 4514154, song2: 5298530.0, song3: 2715368.0, song4: 3375834.0, song5: 5013373.0 }, { date: '2017-10-07', song1: 4495360, song2: 5611556.0, song3: 2608568.0, song4: 3167155.0, song5: 4772899.0 }, { date: '2017-10-08', song1: 3910406, song2: 4812894.0, song3: 2278815.0, song4: 2745954.0, song5: 4149464.0 }, { date: '2017-10-09', song1: 4087219, song2: 4476628.0, song3: 2450972.0, song4: 2910896.0, song5: 4322950.0 }, { date: '2017-10-10', song1: 4101578, song2: 4399014.0, song3: 2480750.0, song4: 2970858.0, song5: 4359961.0 }, { date: '2017-10-11', song1: 4132781, song2: 4426403.0, song3: 2392039.0, song4: 2972495.0, song5: 4331127.0 }, { date: '2017-10-12', song1: 4192091, song2: 4476909.0, song3: 2316364.0, song4: 3020360.0, song5: 4377235.0 }, { date: '2017-10-13', song1: 4438626, song2: 4864863.0, song3: 2425219.0, song4: 3182271.0, song5: 4716436.0 }, { date: '2017-10-14', song1: 4405296, song2: 5175338.0, song3: 2329103.0, song4: 2988696.0, song5: 4499964.0 }, { date: '2017-10-15', song1: 3875526, song2: 4532672.0, song3: 2064846.0, song4: 2643346.0, song5: 3947139.0 }, { date: '2017-10-16', song1: 4014222, song2: 4220968.0, song3: 2208437.0, song4: 2816293.0, song5: 4124168.0 }, { date: '2017-10-17', song1: 4048071, song2: 4203320.0, song3: 2253347.0, song4: 2917406.0, song5: 4193222.0 }, { date: '2017-10-18', song1: 4098205, song2: 4126287.0, song3: 2278676.0, song4: 2914412.0, song5: 4199350.0 }, { date: '2017-10-19', song1: 4123090, song2: 4176623.0, song3: 2288116.0, song4: 2946116.0, song5: 4224348.0 }, { date: '2017-10-20', song1: 4375158, song2: 4551204.0, song3: 2359956.0, song4: 3068961.0, song5: 4474331.0 }, { date: '2017-10-21', song1: 4313880, song2: 4680268.0, song3: 2246145.0, song4: 2885641.0, song5: 4321072.0 }, { date: '2017-10-22', song1: 3759421, song2: 3957884.0, song3: 1966532.0, song4: 2527603.0, song5: 3737602.0 }, { date: '2017-10-23', song1: 3966631, song2: 3837990.0, song3: 2102072.0, song4: 2705348.0, song5: 3973208.0 }, { date: '2017-10-24', song1: 4042766, song2: 3906281.0, song3: 2131370.0, song4: 2801453.0, song5: 4053813.0 }, { date: '2017-10-25', song1: 4092810, song2: 3979854.0, song3: 2177538.0, song4: 2808765.0, song5: 4097702.0 }, { date: '2017-10-26', song1: 4116823, song2: 4010417.0, song3: 2185035.0, song4: 2850254.0, song5: 4099284.0 }, { date: '2017-10-27', song1: 4313006, song2: 4328256.0, song3: 2241455.0, song4: 3011551.0, song5: 4322923.0 }, { date: '2017-10-28', song1: 4197548, song2: 4612204.0, song3: 2122025.0, song4: 2793502.0, song5: 4046255.0 }, { date: '2017-10-29', song1: 3668538, song2: 3796560.0, song3: 1877896.0, song4: 2490961.0, song5: 3545629.0 }, { date: '2017-10-30', song1: 3884031, song2: 3642564.0, song3: 2028548.0, song4: 2617807.0, song5: 3795222.0 }, { date: '2017-10-31', song1: 3926951, song2: 3888958.0, song3: 2034408.0, song4: 2703940.0, song5: 3827345.0 }, { date: '2017-11-01', song1: 3819439, song2: 3662143.0, song3: 1997851.0, song4: 2586475.0, song5: 3630529.0 }, { date: '2017-11-02', song1: 3938190, song2: 3700892.0, song3: 2052542.0, song4: 2675831.0, song5: 3747806.0 }, { date: '2017-11-03', song1: 4144346, song2: 4010977.0, song3: 2129755.0, song4: 2805267.0, song5: 3961130.0 }, { date: '2017-11-04', song1: 4044433, song2: 4020957.0, song3: 2054355.0, song4: 2594979.0, song5: 3713045.0 }, { date: '2017-11-05', song1: 3567680, song2: 3358109.0, song3: 1813190.0, song4: 2279612.0, song5: 3258038.0 }, { date: '2017-11-06', song1: 3695556, song2: 3133130.0, song3: 1949896.0, song4: 2471080.0, song5: 3465063.0 }, { date: '2017-11-07', song1: 3803589, song2: 3069122.0, song3: 2025309.0, song4: 2571403.0, song5: 3563317.0 }, { date: '2017-11-08', song1: 3857766, song2: 3188437.0, song3: 2091348.0, song4: 2587832.0, song5: 3630088.0 }, { date: '2017-11-09', song1: 3896043, song2: 3360350.0, song3: 2114187.0, song4: 2589968.0, song5: 3636623.0 }, { date: '2017-11-10', song1: 4160512, song2: 3555034.0, song3: 2199808.0, song4: 2694944.0, song5: 3841749.0 }, { date: '2017-11-11', song1: 4169862, song2: 3762636.0, song3: 2086537.0, song4: 2530450.0, song5: 3682152.0 }, { date: '2017-11-12', song1: 3658492, song2: 3234510.0, song3: 1839484.0, song4: 2231423.0, song5: 3201396.0 }, { date: '2017-11-13', song1: 3701108, song2: 2995731.0, song3: 1961776.0, song4: 2372934.0, song5: 3383654.0 }, { date: '2017-11-14', song1: 3829468, song2: 3106599.0, song3: 2024536.0, song4: 2487216.0, song5: 3522049.0 }, { date: '2017-11-15', song1: 3940055, song2: 3228922.0, song3: 2072633.0, song4: 2521797.0, song5: 3615039.0 }, { date: '2017-11-16', song1: 3914455, song2: 3184255.0, song3: 2072885.0, song4: 2525020.0, song5: 3601911.0 }, { date: '2017-11-17', song1: 4133833, song2: 3644654.0, song3: 2138618.0, song4: 2617439.0, song5: 3769327.0 }, { date: '2017-11-18', song1: 4110628, song2: 3922003.0, song3: 2051539.0, song4: 2460020.0, song5: 3650789.0 }, { date: '2017-11-19', song1: 3666668, song2: 3343278.0, song3: 1807982.0, song4: 2054707.0, song5: 3195993.0 }, { date: '2017-11-20', song1: 3741930, song2: 3046317.0, song3: 1950981.0, song4: 2158850.0, song5: 3294761.0 }, { date: '2017-11-21', song1: 3796844, song2: 3089118.0, song3: 1993765.0, song4: 2212817.0, song5: 3415188.0 }, { date: '2017-11-22', song1: 3887983, song2: 3123134.0, song3: 2026582.0, song4: 2235130.0, song5: 3510993.0 }, { date: '2017-11-23', song1: 3831227, song2: 2979721.0, song3: 1957258.0, song4: 2071230.0, song5: 3348415.0 }, { date: '2017-11-24', song1: 3934731, song2: 3056587.0, song3: 1969707.0, song4: 2003743.0, song5: 3334933.0 }, { date: '2017-11-25', song1: 4037535, song2: 3277689.0, song3: 1917285.0, song4: 1963710.0, song5: 3302385.0 }, { date: '2017-11-26', song1: 3607335, song2: 2809414.0, song3: 1747479.0, song4: 1822490.0, song5: 2960413.0 }, { date: '2017-11-27', song1: 3651453, song2: 2590998.0, song3: 1855624.0, song4: 1945191.0, song5: 3091897.0 }, { date: '2017-11-28', song1: 3754323, song2: 2641420.0, song3: 1926842.0, song4: 2005434.0, song5: 3166629.0 }, { date: '2017-11-29', song1: 3869611, song2: 2717354.0, song3: 1963523.0, song4: 2046201.0, song5: 3243320.0 }, { date: '2017-11-30', song1: 3887032, song2: 2661182.0, song3: 1990808.0, song4: 2054789.0, song5: 3228846.0 }, { date: '2017-12-01', song1: 4088078, song2: 2774406.0, song3: 1783573.0, song4: 2088544.0, song5: 3328965.0 }, { date: '2017-12-02', song1: 3973771, song2: 2967287.0, song3: 1679101.0, song4: 1926955.0, song5: 3064846.0 }, { date: '2017-12-03', song1: 3497682, song2: 2459963.0, song3: 1492999.0, song4: 1715923.0, song5: 2681287.0 }, { date: '2017-12-04', song1: 3608439, song2: 2300997.0, song3: 1653213.0, song4: 1833301.0, song5: 2832473.0 }, { date: '2017-12-05', song1: 4025974, song2: 2862451.0, song3: 2065676.0, song4: 2094680.0, song5: 2969181.0 }, { date: '2017-12-06', song1: 4486684, song2: 3356051.0, song3: 2287838.0, song4: 2374910.0, song5: 3082904.0 }, { date: '2017-12-07', song1: 4956182, song2: 3962757.0, song3: 2524975.0, song4: 2935759.0, song5: 3258200.0 }, { date: '2017-12-08', song1: 4923111, song2: 4094943.0, song3: 2574826.0, song4: 3035211.0, song5: 3379843.0 }, { date: '2017-12-09', song1: 4730381, song2: 3959109.0, song3: 2336025.0, song4: 2863104.0, song5: 3184655.0 }, { date: '2017-12-10', song1: 4088841, song2: 3140477.0, song3: 2009351.0, song4: 2487852.0, song5: 2695505.0 }, { date: '2017-12-11', song1: 4182447, song2: 2966875.0, song3: 2154369.0, song4: 2657255.0, song5: 2834333.0 }, { date: '2017-12-12', song1: 4303919, song2: 3233276.0, song3: 2235475.0, song4: 2764066.0, song5: 2963018.0 }, { date: '2017-12-13', song1: 4358667, song2: 3314040.0, song3: 2267402.0, song4: 2780471.0, song5: 2978316.0 }, { date: '2017-12-14', song1: 4369297, song2: 3325530.0, song3: 2248060.0, song4: 2780681.0, song5: 2994198.0 }, { date: '2017-12-15', song1: 4514100, song2: 3361095.0, song3: 2225837.0, song4: 2756924.0, song5: 3067124.0 }, { date: '2017-12-16', song1: 4463192, song2: 3489922.0, song3: 2113797.0, song4: 2567140.0, song5: 2723787.0 }, { date: '2017-12-17', song1: 3917389, song2: 2961518.0, song3: 1873012.0, song4: 2279766.0, song5: 2341248.0 }, { date: '2017-12-18', song1: 4071886, song2: 2781199.0, song3: 2028347.0, song4: 2479225.0, song5: 2491145.0 }, { date: '2017-12-19', song1: 4274011, song2: 3003114.0, song3: 2132337.0, song4: 2634297.0, song5: 2607727.0 }, { date: '2017-12-20', song1: 4436628, song2: 3154413.0, song3: 2169795.0, song4: 2687930.0, song5: 2664331.0 }, { date: '2017-12-21', song1: 4510806, song2: 3240941.0, song3: 2175124.0, song4: 2732839.0, song5: 2729016.0 }, { date: '2017-12-22', song1: 4516401, song2: 3336412.0, song3: 1955405.0, song4: 2737098.0, song5: 2746256.0 }, { date: '2017-12-23', song1: 4392917, song2: 3332468.0, song3: 1827557.0, song4: 2317933.0, song5: 2372778.0 }, { date: '2017-12-24', song1: 4115734, song2: 3084918.0, song3: 1482265.0, song4: 1979313.0, song5: 1998051.0 }, { date: '2017-12-25', song1: 3575347, song2: 2945233.0, song3: 1380813.0, song4: 1638493.0, song5: 1754546.0 }, { date: '2017-12-26', song1: 3874765, song2: 3008858.0, song3: 1952557.0, song4: 2035487.0, song5: 2044976.0 }, { date: '2017-12-27', song1: 4393658, song2: 3463788.0, song3: 2241642.0, song4: 2445535.0, song5: 2423038.0 }, { date: '2017-12-28', song1: 4531610, song2: 3498889.0, song3: 2379535.0, song4: 2603003.0, song5: 2668312.0 }, { date: '2017-12-29', song1: 4661519, song2: 3661065.0, song3: 2510770.0, song4: 2604563.0, song5: 2825661.0 }, { date: '2017-12-30', song1: 4707603, song2: 3912257.0, song3: 2505685.0, song4: 2566709.0, song5: 2808529.0 }, { date: '2017-12-31', song1: 7073032, song2: 8203454.0, song3: 3514602.0, song4: 2787752.0, song5: 3792953.0 }, { date: '2018-01-01', song1: 4865387, song2: 5557165.0, song3: 2179506.0, song4: 2368321.0, song5: 2537274.0 }, { date: '2018-01-02', song1: 4541816, song2: 3980200.0, song3: 2368870.0, song4: 2505241.0, song5: 2683769.0 }, { date: '2018-01-03', song1: 4596993, song2: 3890385.0, song3: 2363422.0, song4: 2587620.0, song5: 2753557.0 }, { date: '2018-01-04', song1: 4447076, song2: 3512667.0, song3: 2345804.0, song4: 2575748.0, song5: 2710101.0 }, { date: '2018-01-05', song1: 4492978, song2: 3450315.0, song3: 2408365.0, song4: 2685857.0, song5: 2869783.0 }, { date: '2018-01-06', song1: 4416476, song2: 3394284.0, song3: 2188035.0, song4: 2559044.0, song5: 2743748.0 }, { date: '2018-01-07', song1: 4009104, song2: 3020789.0, song3: 1908129.0, song4: 2350985.0, song5: 2441045.0 }, { date: '2018-01-08', song1: 4135505, song2: 2755266.0, song3: 2023251.0, song4: 2523265.0, song5: 2622693.0 }, { date: '2018-01-09', song1: 4168506, song2: 2791601.0, song3: 2058016.0, song4: 2727678.0, song5: 2627334.0 },
    ]
    data2 = parse_data(d)
    return data2;
  }

}
