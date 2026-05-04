import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export default function Calendar() {
  return (
    <>
      <div className="page-title">
        <div>
          <h1>Calendar</h1>
          <div className="meta">Reminders & events</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="btn ghost icon sm"><ChevronLeft size={16} /></button>
          <strong style={{ minWidth: '8rem', textAlign: 'center' }}>May 2026</strong>
          <button className="btn ghost icon sm"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="card-block">
        <div className="card-block-pad">
          <div className="cal-grid">
            <div className="cal-dow">Sun</div><div className="cal-dow">Mon</div><div className="cal-dow">Tue</div>
            <div className="cal-dow">Wed</div><div className="cal-dow">Thu</div><div className="cal-dow">Fri</div><div className="cal-dow">Sat</div>
          </div>
          <div className="cal-grid" style={{ marginTop: '0.25rem' }}>
            <div className="cal-day muted"><div>26</div></div>
            <div className="cal-day muted"><div>27</div></div>
            <div className="cal-day muted"><div>28</div></div>
            <div className="cal-day muted"><div>29</div></div>
            <div className="cal-day muted"><div>30</div></div>
            <div className="cal-day"><div>1</div></div>
            <div className="cal-day"><div>2</div></div>
            <div className="cal-day"><div>3</div></div>
            <div className="cal-day"><div>4</div></div>
            <div className="cal-day"><div>5</div></div>
            <div className="cal-day"><div>6</div></div>
            <div className="cal-day"><div>7</div></div>
            <div className="cal-day"><div>8</div></div>
            <div className="cal-day today"><div>9</div></div>
            <div className="cal-day"><div>10</div></div>
            <div className="cal-day"><div>11</div></div>
            <div className="cal-day"><div>12</div></div>
            <div className="cal-day"><div>13</div></div>
            <div className="cal-day"><div>14</div></div>
            <div className="cal-day"><div>15</div></div>
            <div className="cal-day"><div>16</div></div>
            <div className="cal-day"><div>17</div></div>
            <div className="cal-day"><div>18</div></div>
            <div className="cal-day"><div>19</div></div>
            <div className="cal-day"><div>20</div></div>
            <div className="cal-day"><div>21</div></div>
            <div className="cal-day"><div>22</div></div>
            <div className="cal-day"><div>23</div></div>
            <div className="cal-day"><div>24</div></div>
            <div className="cal-day"><div>25</div></div>
            <div className="cal-day"><div>26</div></div>
            <div className="cal-day"><div>27</div></div>
            <div className="cal-day"><div>28</div></div>
            <div className="cal-day"><div>29</div></div>
            <div className="cal-day"><div>30</div></div>
          </div>
        </div>
      </div>

      <div className="card-block" style={{ marginTop: '1rem' }}>
        <div className="card-block-pad">
          <div className="cb-head">
            <span className="ic"><Clock size={16} /></span>
            Upcoming
          </div>
          <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
            No upcoming events or reminders.
          </div>
        </div>
      </div>
    </>
  );
}
