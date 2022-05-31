class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // 검색어(query)를 던졌을때 돌아오는
  async search(query) {
    console.log("in youtube.js : " + query);
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
        // videoDuration: 'long'
      },
    });

    // 검색한 결과의 videoId를 다시 api로 보내서 조회수, 영상 길이 append
    response.data.items.map((item) =>
      this.youtube
        .get("videos", {
          params: {
            part: "contentDetails,statistics",
            id: item.id.videoId,
          },
        })
        .then((response3) => Object.assign(item, response3.data.items[0]))
    );

    console.log("youtube.js: ");
    // console.log(response.data);

    return response.data;
  }

  // Pagination을 위한 Token 가져오는
  async getTokenDetail(query, pageToken) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
        pageToken: pageToken,
        // videoDuration: 'long'
      },
    });

    // 검색한 결과의 videoId를 다시 api로 보내서 조회수, 영상 길이 append
    response.data.items.map((item) =>
      this.youtube
        .get("videos", {
          params: {
            part: "contentDetails,statistics",
            id: item.id.videoId,
          },
        })
        .then((response3) => Object.assign(item, response3.data.items[0]))
    );

    return response.data;
  }
}

export default Youtube;
