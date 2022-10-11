<template>
  <div class="filltering-wrap">
        <div class="filltering">
        <div class="title">
            <h2>필터링 기준</h2>
            <button class="reset">초기화</button>
            <button class="close">닫기</button>
        </div>
        <div class="fillter-form">
            <label for="fillter-keyword">키워드</label>
            <input id="fillter-keyword" type="text" placeholder="예: PTO정책"/>
            <label for="fillter-sender">보낸 사람</label>
            <input id="fillter-sender" type="text" placeholder="예: PTO정책"/>
            <label for="fillter-target">대상</label>
            <input id="fillter-target" type="text" placeholder="예: PTO정책"/>
            <label for="fillter-contact">대화 상대</label>
            <input id="fillter-contact" type="text" placeholder="예: PTO정책"/>
            <label for="fillter-date">날짜</label>
            <select id="fillter-date">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <input type="checkbox" /><label>내가 있는 채널만 포함</label>
            <input type="checkbox" /><label>앱, 봇 및 워크플로 제외</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .filltering-wrap{
        display: inline-block;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: $modal-lightbox-background-color;
        .filltering{
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            margin-left: 50vw;
            margin-top: 50vh;
            max-width: 400px;
            max-height: 600px;
            background-color: $main-font-color-white;
            color: $main-font-color-black;
            transform: translate(-50%, -50%);
            input, label{
                display: block;
            }

            .title{
                h2, button{
                    display: inline-block;
                }
            }
        }
    }
</style>