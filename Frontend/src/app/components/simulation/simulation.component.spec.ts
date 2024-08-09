import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimulationComponent } from './simulation.component';
import { SimulationService } from 'src/app/service/simulation.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('SimulationComponent', () => {
  let component: SimulationComponent;
  let fixture: ComponentFixture<SimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ], 
      declarations: [SimulationComponent],
      providers: [SimulationService] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
