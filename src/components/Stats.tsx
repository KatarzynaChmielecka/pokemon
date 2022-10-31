import classes from './Stats.module.css';

const Stats = ({ name, base_stat }: { base_stat: number; name: string }) => {
  return (
    <div className={classes['pokemon-stats']}>
      <p className={classes['pokemon-stats__name']}>{name}</p>
      <span className={classes['pokemon-stats__content-wrapper']}>
        <div className={classes['pokemon-stats__progress-outer']}>
          <div
            style={{
              width: `calc(${base_stat}px - ${base_stat / 1.4}px)`,
            }}
            className={classes['pokemon-stats__progress-inner']}
          />
        </div>
        <p className={classes['pokemon-stats__points']}>{base_stat}</p>
      </span>
    </div>
  );
};

export default Stats;
