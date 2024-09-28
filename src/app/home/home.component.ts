import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Include CommonModule and RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Use styleUrls instead of styleUrl
})
export class HomeComponent {
  cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      img: 'https://img.freepik.com/free-vector/end-quarantine-concept_23-2148554366.jpg?uid=R150971852&ga=GA1.1.484307960.1726950447',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      img: 'https://img.freepik.com/free-vector/waste-management-concept-illustration_114360-8725.jpg?uid=R150971852&ga=GA1.1.484307960.1726950447',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      img: 'https://img.freepik.com/free-vector/people-recycling-concept_23-2148531286.jpg?t=st=1727464555~exp=1727468155~hmac=125214ec0f8f1f44aae3190c1aa775a33f8794d016e55f761bf2693e8c3b52bd&w=740',
    },
    {
      title: 'Card 4',
      description: 'This is the fourth card.',
      img: 'https://img.freepik.com/free-vector/people-recycling-concept_23-2148522560.jpg?t=st=1727464540~exp=1727468140~hmac=6b3523a8a18011da76ac93c46d468823d928afdda255f096d6d0ea39db801d08&w=740',
    },
    {
      title: 'Card 5',
      description: 'This is the fifth card.',
      img: 'https://img.freepik.com/free-vector/people-recycling-together_23-2148516541.jpg?t=st=1727466179~exp=1727469779~hmac=f1c958be9bbe3a07516ad08170c815015637bc07895a0044d40d07565a8432f3&w=740',
    },
    {
      title: 'Card 6',
      description: 'This is the sixth card.',
      img: 'https://img.freepik.com/free-vector/people-recycling-concept_23-2148534589.jpg?t=st=1727466316~exp=1727469916~hmac=d58db24b9eaee4eb4d9b699e1fc923f6c4f9faf48351edfe702cb6419fa043d7&w=740',
    },
    {
      title: 'Card 7',
      description: 'This is the first card.',
      img: 'https://img.freepik.com/free-vector/end-quarantine-concept_23-2148554366.jpg?uid=R150971852&ga=GA1.1.484307960.1726950447',
    },
    {
      title: 'Card 8',
      description: 'This is the second card.',
      img: 'https://img.freepik.com/free-vector/waste-management-concept-illustration_114360-8725.jpg?uid=R150971852&ga=GA1.1.484307960.1726950447',
    }
  ];

  secondCard = [
    {
      title: 'Learn New Skills',
      description: 'Access thousands of courses to upskill yourself.',
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your learning journey and achievements.',
    },
    {
      title: 'Earn Certificates',
      description: 'Get certified upon completion of courses.',
    },
    {
      title: 'Join the Community',
      description: 'Connect with like-minded learners and experts.',
    },
  ];
}
