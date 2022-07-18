import { Post } from "./types";

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pravatar.cc/150",
      name: "Taylor Jenkins",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Risus ultricies tellus cubilia duis eleifend consectetur montes. Porta odio tincidunt quisque vulputate. Massa blandit venenatis orci donec lorem hac eu. Lectus curabitur aenean vehicula nisl facilisis bibendum ultricies. Metus finibus risus iaculis molestie gravida? Erat penatibus placerat est quis inceptos amet sagittis.",
      },
      {
        type: "paragraph",
        content:
          "Senectus cras donec risus platea nisi. Cubilia urna in maximus congue. Sit mus eget placerat montes ultrices euismod. Quis massa fames dis magnis neque in ex? Placerat augue massa euismod habitant turpis litora torquent. Gravida odio euismod est integer ipsum. Sodales curabitur nulla, nisi erat consequat fringilla.",
      },
      {
        type: "link",
        content: "https://www.google.com",
      },
    ],
    publishedAt: new Date("2022-07-13 12:00:00"),
    comments: [
      {
        id: 1,
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Risus ultricies tellus cubilia duis eleifend consectetur montes. Porta odio tincidunt quisque vulputate. Massa blandit venenatis orci donec lorem hac eu. Lectus curabitur aenean vehicula nisl facilisis bibendum ultricies. Metus finibus risus iaculis molestie gravida? Erat penatibus placerat est quis inceptos amet sagittis.",
        publishedAt: new Date("2022-07-13 12:00:00"),
      },
      {
        id: 2,
        content:
          "Senectus cras donec risus platea nisi. Cubilia urna in maximus congue. Sit mus eget placerat montes ultrices euismod. Quis massa fames dis magnis neque in ex? Placerat augue massa euismod habitant turpis litora torquent. Gravida odio euismod est integer ipsum. Sodales curabitur nulla, nisi erat consequat fringilla.",
        publishedAt: new Date("2022-07-16 12:00:00"),
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      name: "Charlie Robbin",
      role: "Designer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Risus ultricies tellus cubilia duis eleifend consectetur montes. Porta odio tincidunt quisque vulputate. Massa blandit venenatis orci donec lorem hac eu. Lectus curabitur aenean vehicula nisl facilisis bibendum ultricies. Metus finibus risus iaculis molestie gravida? Erat penatibus placerat est quis inceptos amet sagittis.",
      },
      {
        type: "paragraph",
        content:
          "Senectus cras donec risus platea nisi. Cubilia urna in maximus congue. Sit mus eget placerat montes ultrices euismod. Quis massa fames dis magnis neque in ex? Placerat augue massa euismod habitant turpis litora torquent. Gravida odio euismod est integer ipsum. Sodales curabitur nulla, nisi erat consequat fringilla.",
      },
      {
        type: "link",
        content: "https://www.google.com",
      },
    ],
    publishedAt: new Date("2022-07-13 12:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      name: "Lu Chen",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Risus ultricies tellus cubilia duis eleifend consectetur montes. Porta odio tincidunt quisque vulputate. Massa blandit venenatis orci donec lorem hac eu. Lectus curabitur aenean vehicula nisl facilisis bibendum ultricies. Metus finibus risus iaculis molestie gravida? Erat penatibus placerat est quis inceptos amet sagittis.",
      },
      {
        type: "paragraph",
        content:
          "Senectus cras donec risus platea nisi. Cubilia urna in maximus congue. Sit mus eget placerat montes ultrices euismod. Quis massa fames dis magnis neque in ex? Placerat augue massa euismod habitant turpis litora torquent. Gravida odio euismod est integer ipsum. Sodales curabitur nulla, nisi erat consequat fringilla.",
      },
      {
        type: "link",
        content: "https://www.google.com",
      },
    ],
    publishedAt: new Date("2022-07-13 12:00:00"),
  },
];
