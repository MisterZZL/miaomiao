<template>
  <div class="messageBox">
    <h2>定位</h2>
    <p>是否切换到当前城市：北京</p>
    <div>
      <span>否</span>
      <span>是</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox"
};
</script>

<style lang="scss" scoped>
.messageBox {
  width: 270px;
  height: 120px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 13px;
  box-sizing: border-box;
  // box-shadow: 3px 3px 3px 3px #ccc;
  /* 居中定位*/
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -60px 0 0 -135px;
  padding: 15px;
  h2 {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    line-height: 21px;
  }
  p {
    font-family: inherit;
    font-size: 14px;
    margin: 5px 0 0;
    text-align: center;
    line-height: 21px;
  }
  div {
    
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    span {
        flex: 1;
        text-align: center;
        line-height: 30px;
        border-right: 1px solid #ccc;
    }
    span:last-child {
        border: none
    }
  }
}
</style>