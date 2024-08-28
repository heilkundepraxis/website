import { OPENING_HOURS } from '@app/config';

const OpeningHours = () => {
  const dayMapper = {
    Mo: 'Montag',
    Tu: 'Dienstag',
    We: 'Mittwoch',
    Th: 'Donnerstag',
    Fr: 'Freitag',
    Sa: 'Samstag',
    Su: 'Sonntag',
  };

  return (
    <>
      {OPENING_HOURS.map((hours) => {
        const day = dayMapper[hours.day];

        return (
          <div key={hours.day} className="flex flex-row gap-4">
            <div className="flex-none w-11 sm:w-24">
              {day.substring(0, 2)}<span className="hidden sm:inline-block">{day.substring(2)}</span>:
            </div>
            <div className="flex-1">
              {hours.opens ? `${hours.opens} - ${hours.closes} Uhr` : 'geschlossen'}
            </div>
          </div>
        );
      })}
      <div className="mt-2">
        <strong>Termin nur nach Vereinbarung</strong>
      </div>
    </>
  );
};

export default OpeningHours;
