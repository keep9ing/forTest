<template>
  <div>
    <ul class="news-list">
      <!-- <li v-for="(item, index) in this.$store.state.news" :key="index" class="post"> -->
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 정보 -->
        <div>
          <!-- 타이틀 -->
          <p class="news-title">
            <!-- 해당링크로 연결, 하거나 -->
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <!-- 유저정보로 연결하는 분기처리 -->
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <small class="link-text">
            <!-- router-link 에 v-if / v-els 분기처리 -->
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // created() {
  //   // ListItem으로 공통 컴포넌트 뽑은 후 데이터에 따라 분기처리
  //   // console.log(this.$route.path === '/news');
  //   const name = this.$route.name;
  //   if (name === 'news') {
  //     this.$store.dispatch('FETCH_NEWS');
  //   } else if (name === 'ask') {
  //     this.$store.dispatch('FETCH_ASK');
  //   } else if (name === 'jobs') {
  //     this.$store.dispatch('FETCH_JOBS');
  //   }
  // },
  computed: {
    // eslint-disable-next-line
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;
      // if (name === 'news') {
      //   return this.$store.state.news;
      // } else if (name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs;
      // }
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #428883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>