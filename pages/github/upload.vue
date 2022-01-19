<template>
  <v-container>
    <div class="main">
      <Content :title="title" :date="date" :content="content" :source="source" :reference="reference" />
    </div>
  </v-container>
</template>

<script>
import Content from "@/components/content";

export default {
  name: 'Upload',
  components: { Content },
  data () {
    return {
      title: "Github 업로드",
      date: "2021-10-25",
      content:[
        {
          title: "Commit",
          type: "C",
          scr: 
`$ git status                                                // 현재 상태 확인 
$ git add .                                                 // 수정된 모든 파일 스테이지 
$ git commit -m "메모"                                      // 커밋
$ git push origin master`
        },
        {
          title: "Folder Upload",
          type: "C",
          scr: 
`$ cd 폴더이름                                                // 폴더로 이동
$ git status                                                // 현재 상태 확인 
$ git add .                                                 // 폴더의 모든 파일 스테이지
$ git commit -m "메모"                                      // 커밋
$ git remote add origin https://github.com/리포지토리주소    // 리포지토리 연결
$ git push origin master`
        },
      ],
      source: [
      ],         
      reference: [

      ]
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>