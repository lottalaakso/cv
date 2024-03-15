import '../App.css';

const TimelineItem = ({ date, title, content }) => (
  <div className="timeline-item">
    <div className="timeline-date">{date}</div>
    <div className="timeline-content">
        <div>
        <h3 className="timeline-title">{title}</h3>
        <p>{content}</p>
        </div>
    </div>
  </div>
);

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item, index) => (
      <TimelineItem key={index} {...item} />
    ))}
  </div>
);

const Info = () => {
  const timelineItems = [
    {
      date: 'March 2023 - April 2024',
      title: 'Salesperson, Sokos Rovaniemi',
      content: 'Worked as a software engineer at Example Corp. Developed and maintained software applications.'
    },
    {
      date: 'May 2022 - July 2022',
      title: 'Intern, Kuntien Tiera oy',
      content: 'Served as a frontend developer at Another Company. Implemented user interfaces for web applications.'
    },
    {
      date: 'March 2018 - August 2021',
      title: 'Barista, Fazer Ravintolat oy',
      content: 'Served as a frontend developer at Another Company. Implemented user interfaces for web applications.'
    }
  ];

  return (
    <div className="timeline">
      <h2 className="timeline-header">Work Experience</h2>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Info;
