const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 2 || dayOfWeek === 6) {
    const banner = document.createElement('#event');
    banner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    document.body.insertBefore(banner, document.body.firstChild);
}