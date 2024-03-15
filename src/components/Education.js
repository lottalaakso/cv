import '../App.css';

const TimelineItem = ({ date, title, content }) => (
  <div className="timeline-item">
    <div className="timeline-date">{date}</div>
    <div className="timeline-content">
        <div>
        <h3 className="timeline-title">{title}</h3>
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
      date: 'September 2021 -',
      title: 'Bachelor of Engineering, Information and Communications Technology, Lapland University of Applied Sciences',
    },
    {
      date: 'August 2016 - June 2019',
      title: 'High School Graduate, Lauttasaari High School',
    },
    
  ];

  return (
    <div className="timeline">
      <h2 className="timeline-header">Education</h2>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Info;
