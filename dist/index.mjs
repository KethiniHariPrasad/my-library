import e from "react";
function l({
  img: t,
  title: r,
  children: a
}) {
  return /* @__PURE__ */ e.createElement("article", { "data-card": !0 }, /* @__PURE__ */ e.createElement("img", { "data-card-img": !0, src: t.src, alt: t.alt }), /* @__PURE__ */ e.createElement("h2", null, r), a);
}
export {
  l as Card
};
