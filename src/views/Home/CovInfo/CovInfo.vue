<template>
  <div class="info">
    <div class="cov">
      <div class="title">
        病毒信息
        <a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner"
          >查看更多 <img src="../../../assets/images/more.png" alt=""
        /></a><p></p>
        <div class="xinxi">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        新型冠状病毒肺炎（Corona Virus Disease 2019，COVID-19），
        简称“新冠肺炎”，世界卫生组织命名为“2019冠状病毒病”  ，
        是指2019新型冠状病毒感染导致的肺炎。2019年12月以来，
        湖北省武汉市部分医院陆续发现了多例有华南海鲜市场暴露史的不明原因肺炎病例，
        证实为2019新型冠状病毒感染引起的急性呼吸道传染病。</div>
      </div>
      <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p>
    </div>
    <div class="hot">
      <div class="title">
        <img class="icon" src="../../../assets/images/hot.png" alt="" />
        <a href="##"
          >查看更多<img src="../../../assets/images/more.png" alt=""
        /></a>
      </div>
      <ul class="list">
        <li v-for="item in news" :key="item.id">
          <span>最新</span> {{ item.title }}
          <img src="../../../assets/images/right.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covDesc: {
      type: Object,
      default: function () {
        return {};
      },
    },
    news: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang='less' scoped>
.info {
  padding: 0.2rem;
  .title {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
    a {
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
    .xinxi{
    line-height: 0.44rem;
    margin-bottom: 0.2rem;
    letter-spacing: 0.03rem;
    font-size: 0.3rem;
    color: #666;
  }
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: #666;
  }
  .hot {
    padding-top: 0.2rem;
    border-bottom: 1px solid #eee;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
    .list {
      li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
      }
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
      }
      img {
        float: right;
        width: 0.24rem;
        padding-right: 0.2rem;
      }
    }
  }
}
</style>