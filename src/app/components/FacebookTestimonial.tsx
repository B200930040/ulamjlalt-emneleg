'use client';

export default function FacebookTestimonial() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Facebook сэтгэгдэл</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/facebook&tabs=timeline&width=500&height=400"
          width="500"
          height="400"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="Facebook Timeline"
        ></iframe>
      </div>
    </section>
  );
}
