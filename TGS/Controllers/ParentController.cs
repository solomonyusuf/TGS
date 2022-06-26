using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TGS.Data;
using TGS.Models;

namespace TGS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ParentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Parent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParentInfo>>> GetParentInfo()
        {
            return await _context.ParentInfo.ToListAsync();
        }

        // GET: api/Parent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParentInfo>> GetParentInfo(Guid id)
        {
            var parentInfo = await _context.ParentInfo.FindAsync(id);

            if (parentInfo == null)
            {
                return NotFound();
            }

            return parentInfo;
        }

        // PUT: api/Parent/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParentInfo(Guid id, ParentInfo parentInfo)
        {
            if (id != parentInfo.ParentId)
            {
                return BadRequest();
            }

            _context.Entry(parentInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParentInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Parent
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ParentInfo>> PostParentInfo(ParentInfo parentInfo)
        {
            _context.ParentInfo.Add(parentInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParentInfo", new { id = parentInfo.ParentId }, parentInfo);
        }

        // DELETE: api/Parent/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParentInfo(Guid id)
        {
            var parentInfo = await _context.ParentInfo.FindAsync(id);
            if (parentInfo == null)
            {
                return NotFound();
            }

            _context.ParentInfo.Remove(parentInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParentInfoExists(Guid id)
        {
            return _context.ParentInfo.Any(e => e.ParentId == id);
        }
    }
}
