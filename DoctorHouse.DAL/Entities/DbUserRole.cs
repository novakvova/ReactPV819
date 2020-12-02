﻿using Microsoft.AspNetCore.Identity;

namespace DoctorHouse.DAL.Entities
{
    public class DbUserRole : IdentityUserRole<long>
    {
        public virtual DbUser User { get; set; }
        public virtual DbRole Role { get; set; }

    }
}